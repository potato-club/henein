import React, { useState } from "react";
import styled from "styled-components";
import ReComment from "/public/detailPageImages/reComment.svg";
import { customColor } from "../../../constants/customColor";
import CommentMenuIcon from "./CommentMenuIcon";
import timeDifference from "../../../utils/timeDifference";
import CommentForm from "./CommentForm";
import ModifyCommentForm from "./ModifyCommentForm";
import { useMine } from "../../../hooks/detailPageHooks/useDetail";
import Label from "../../../component/Label";

const ReComments = ({ ...data }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isModifyRClick, setIsModifyRClick] = useState<boolean>(false);

  const isMine = useMine(data.uid);

  return (
    <Container>
      <ReComment width="20px" height="20px" />
      <CommentBox>
        {isModifyRClick ? (
          <>
            <ModifyCommentForm
              setIsModifyClick={setIsModifyRClick}
              isRecomment={true}
            />
          </>
        ) : (
          <>
            <CommentHeader>
              <UserInfo>
                <NickName isMine={isMine} isAdminRole={data.role === "ADMIN"}>
                  {data.nickName}
                </NickName>
                {data.role === "WRITER" && <Label type={data.role} />}
                <Time>{timeDifference(data.modifiedDate)}</Time>
              </UserInfo>
              <CommentMenuIcon
                boardId={data.boardId}
                comment={data.comment}
                commentId={data.commentId}
                replyId={data.replyId}
                isMine={isMine}
                isRecomment={true}
                tag={data.tag}
                setIsModifyClick={setIsModifyRClick}
              />
            </CommentHeader>
            <CommentContent>
              {data.tag ? (
                <NormalSpan>
                  <TagSpan>{"@" + data.tag}</TagSpan>
                  {data.comment}
                </NormalSpan>
              ) : (
                data.comment
              )}
            </CommentContent>
            <FormDisplay>
              <ReCommentBtn onClick={() => setIsClick(true)}>답글</ReCommentBtn>
              {isClick && (
                <CommentForm
                  setIsClick={setIsClick}
                  boardId={data.boardId}
                  commentId={data.commentId}
                  isRecomment={true}
                  nickName={data.nickName}
                />
              )}
            </FormDisplay>
          </>
        )}
      </CommentBox>
    </Container>
  );
};

export default ReComments;
const Container = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 12px;
  svg {
    color: ${(prop) => prop.theme.subText};
  }
`;
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
const Time = styled.div`
  color: ${(prop) => prop.theme.subText};
  font-size: 12px;
`;

const NickName = styled.div<{ isMine: boolean; isAdminRole: boolean }>`
  color: ${({ theme, isAdminRole, isMine }) =>
    isAdminRole ? theme.danger : isMine ? theme.brand : theme.text};
  font-size: 12px;
  font-weight: ${({ isAdminRole }) => (isAdminRole ? "700" : "500")};
`;

const CommentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
  gap: 4px;
`;
const CommentContent = styled.pre`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(prop) => prop.theme.text};
`;
const NormalSpan = styled.pre``;
const TagSpan = styled.span`
  color: ${({ theme }) => theme.mentionText};
  margin-right: 4px;
`;
