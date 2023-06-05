import React, { useState } from "react";
import styled from "styled-components";
import TextAreaAutoResize from "react-textarea-autosize";
import { FieldValues, useForm } from "react-hook-form";
import {
  usePostComment,
  usePostReComment,
} from "../../../hooks/detailPageHooks/useComment";
import { useLocalStorage } from "../../../hooks/storage/useLocalStorage";
import { PComment, RComment } from "../../../api/comment";

interface ICommentFormProps {
  setIsClick: (arg: boolean) => void;
  boardId: string;
  commentId?: string;
  isRecomment: boolean;
  userName?: string;
}
const CommentForm = ({ ...props }: ICommentFormProps) => {
  const { getLocalStorage } = useLocalStorage();
  const accessToken = getLocalStorage("access");

  const [isFocusInput, setIsFocusInput] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const [PFormData, setPFormData] = useState<PComment>({
    boardId: "",
    comment: "",
    commentId: "",
    accessToken,
  });
  const [RFormData, setRFormData] = useState<RComment>({
    boardId: "",
    comment: "",
    commentId: "",
    replyId: "",
    tag: "",
    accessToken,
  });

  const { postReComments } = usePostReComment(RFormData); // 대댓글 post api
  const { postComments } = usePostComment(PFormData); // 댓글 post api

  const submit = async (data: FieldValues) => {
    if (!localStorage.getItem("refresh")) {
      alert("로그인해야 이용할 수 있습니다.");
      reset();
      return;
    } else {
      const commentWithoutTag = data.comment.replace("@" + props.userName, "");

      // 대댓글이라면 앞쪽 mutate, 부모댓글이라면 뒷쪽 mutate
      if (props.isRecomment) {
        await setRFormData({
          ...RFormData,
          boardId: props.boardId,
          comment: commentWithoutTag.trim(),
          commentId: props.commentId ?? "",
          tag: data.comment.includes("@" + props.userName)
            ? props.userName
            : "",
        });
        await postReComments();
      } else {
        await setPFormData({
          ...PFormData,
          boardId: props.boardId,
          comment: data.comment,
          commentId: props.commentId ?? "",
        });
        await postComments();
      }

      reset();
    }
  };

  // 대댓글일때 취소버튼
  const cancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    props.setIsClick(false);
  };
  // 댓글일때 취소버튼
  const cancelClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    setIsFocusInput(false);
  };
  return (
    <ContainerForm
      onSubmit={handleSubmit(submit)}
      isRecomment={props.isRecomment}
    >
      <WriteDiv>
        <StyledTextareaAutosize
          placeholder="댓글 쓰기"
          rows={1}
          {...register("comment")}
          onFocus={() => setIsFocusInput(true)}
          defaultValue={props.isRecomment ? `@${props.userName} ` : ""}
        />
        <InputFunc isRecomment={props.isRecomment} isFocusInput={isFocusInput}>
          <CancelBtn onClick={props.isRecomment ? cancelClick : cancelClick2}>
            취소
          </CancelBtn>
          <SubmitBtn type="submit">작성하기</SubmitBtn>
        </InputFunc>
      </WriteDiv>
    </ContainerForm>
  );
};

export default CommentForm;
const ContainerForm = styled.form<{ isRecomment: boolean }>`
  margin-bottom: ${({ isRecomment }) => !isRecomment && "20px"};
`;
const WriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${(prop) => prop.theme.border};
  background-color: ${(prop) => prop.theme.input};
`;
const StyledTextareaAutosize = styled(TextAreaAutoResize)`
  font-size: 14px;
  resize: none;
  color: ${({ theme }) => theme.Text};
  background-color: ${(prop) => prop.theme.input};
  border: none;
  padding: 0px;
  ::placeholder {
    color: ${(prop) => prop.theme.subText};
    font-size: 14px;
    font-weight: 400;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const InputFunc = styled.div<{ isRecomment: boolean; isFocusInput: boolean }>`
  display: ${({ isRecomment, isFocusInput }) =>
    isRecomment ? "flex" : isFocusInput ? "flex" : "none"};
  justify-content: end;
  gap: 4px;
`;
const CancelBtn = styled.button`
  padding: 4px 8px;
  color: ${({ theme }) => theme.subText};
  font-weight: 500;
  font-size: 12px;
`;
const SubmitBtn = styled.button`
  padding: 4px 8px;
  color: ${({ theme }) => theme.Brand};
  font-weight: 700;
  font-size: 12px;
`;