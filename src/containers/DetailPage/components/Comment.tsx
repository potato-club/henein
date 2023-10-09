import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentMenuIcon from "./CommentMenuIcon";
import { customColor } from "../../../constants/customColor";
import ReComments from "./ReComments";
import timeDifference from "../../../utils/timeDifference";
import { CommentType } from "../DetailPage";
import CommentForm from "./CommentForm";
import ModifyCommentForm from "./ModifyCommentForm";
import { useMine } from "../../../hooks/detailPageHooks/useDetail";

const Comment = ({ ...data }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isModifyClick, setIsModifyClick] = useState<boolean>(false);
  const [isDeleteComment, setIsDeleteComment] = useState<boolean>(false);

  const isMine = useMine(data.uid);
  useEffect(() => {
    if (data.uid == "deleted") setIsDeleteComment(true);
  }, [data.uid]);

  return (
    <Container>
      <CommentBox isLastComment={data.isLastComment}>
        {isModifyClick ? (
          <>
            <ModifyCommentForm
              setIsModifyClick={setIsModifyClick}
              isRecomment={false}
            />
          </>
        ) : (
          <>
            <CommentHeader>
              <UserInfo>
                <NickName isDeleteComment={isDeleteComment} isMine={isMine}>
                  {data.userName}
                </NickName>
                <Time>· {timeDifference(data.modifiedDate)}</Time>
              </UserInfo>
              {!isDeleteComment && (
                <CommentMenuIcon
                  boardId={data.boardId}
                  comment={data.comment}
                  commentId={data.commentId}
                  isMine={isMine}
                  isRecomment={false}
                  setIsModifyClick={setIsModifyClick}
                />
              )}
            </CommentHeader>
            <CommentContent isDeleteComment={isDeleteComment}>
              {data.comment}
            </CommentContent>
            <FormDisplay>
              {!isDeleteComment && (
                <ReCommentBtn onClick={() => setIsClick(true)}>
                  답글
                </ReCommentBtn>
              )}
              {isClick && (
                <CommentForm
                  setIsClick={setIsClick}
                  boardId={data.boardId}
                  commentId={data.commentId}
                  isRecomment={true}
                  firstRecomment={true}
                  userName={data.userName}
                />
              )}
            </FormDisplay>
          </>
        )}

        <div>
          {data.replies.map((item: CommentType, idx: number) => {
            return (
              <ReComments
                boardId={data.boardId}
                comment={item.comment}
                userName={item.userName}
                modifiedDate={item.modifiedDate}
                tag={item.tag}
                replyId={item.replyId}
                parentCommentId={data.commentId}
                uid={item.uid}
                key={idx}
              />
            );
          })}
        </div>
      </CommentBox>
    </Container>
  );
};

export default Comment;

const ReCommentBtn = styled.button`
  color: ${(prop) => prop.theme.subText};
  font-size: 12px;
  text-align: start;
  &:hover {
    color: ${customColor.moreDarkGray};
    font-weight: 900;
  }
`;
const FormDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
`;

const Time = styled.div`
  color: ${(prop) => prop.theme.subText};
  font-size: 12px;
`;
const NickName = styled.div<{ isMine: boolean; isDeleteComment: boolean }>`
  color: ${({ theme, isDeleteComment, isMine }) =>
    isDeleteComment ? theme.subText : isMine ? theme.brand : theme.text};
    font-weight: ${({ isMine }) => isMine && '500'};
  margin-right: 4px;
  font-size: 12px;
`;

const CommentBox = styled.div<{ isLastComment: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: ${({ isLastComment }) => !isLastComment && "14px"};
  border-bottom: ${({ theme, isLastComment }) =>
    !isLastComment && `1px solid ${theme.divider}`};
  margin-bottom: ${({ isLastComment }) => !isLastComment && "20px"};
`;
const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const CommentContent = styled.div<{ isDeleteComment: boolean }>`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${({ theme, isDeleteComment }) =>
    isDeleteComment ? theme.subText : theme.text};
`;
