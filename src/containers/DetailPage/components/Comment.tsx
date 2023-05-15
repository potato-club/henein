import React from "react";
import styled from "styled-components";
import CommentMenuIcon from "./CommentMenuIcon";
import { customColor } from "../../../constants/customColor";
import ReComments from "./ReComments";
import timeDifference from "../../../utils/timeDifference";
import { CommentType } from "../DetailPage";

// 작성자 본인인지 아닌지, 닉네임, 층, 직업, 시간, 대댓글인지 새로운 댓글인지
// 마지막 댓글인지?
const Comment = ({ ...data }) => {
  console.log(data);
  return (
    <Comments>
      <CommentBox>
        <CommentHeader>
          <UserInfo>
            <NickName>{data.userId}</NickName>
            <Floor>48층</Floor>
            <Job>겸마 격수</Job>
            <Time>{timeDifference(data.modifiedDate)}</Time>
          </UserInfo>
          <CommentMenuIcon />
        </CommentHeader>
        <CommentContent>{data.comment}</CommentContent>
        <div>
          <ReCommentBtn>답글</ReCommentBtn>
          {data.replies.map((item: CommentType) => {
            return (
              <ReComments
                comment={item.comment}
                userId={item.userId}
                modifiedDate={item.modifiedDate}
                tag={item.tag}
                key={item.commentId}
              />
            );
          })}
        </div>
      </CommentBox>
    </Comments>
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

const Comments = styled.div`
  display: flex;
`;

const Job = styled.div`
  padding: 2px 4px;
  border-radius: 8px;
  font-size: 12px;
  margin-right: 4px;
  color: ${customColor.white};
  background-color: ${customColor.labelBlack};
`;
const Time = styled.div`
  color: ${(prop) => prop.theme.subText};
  font-size: 12px;
`;
const Floor = styled.div`
  padding: 2px 4px;
  border-radius: 8px;
  font-size: 12px;
  margin-right: 4px;
  color: ${customColor.white};
  background-color: ${customColor.floor};
`;
const NickName = styled.div`
  color: ${(prop) => prop.theme.Text};
  margin-right: 4px;
  font-size: 12px;
`;

const CommentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 14px;
  border-bottom: 1px solid ${customColor.divider};
  margin-bottom: 20px;
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
const CommentContent = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(prop) => prop.theme.Text};
`;
