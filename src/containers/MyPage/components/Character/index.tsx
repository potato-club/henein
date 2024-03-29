import React, { useState } from "react";
import styled from "styled-components";
import CharSelectBox from "./CharSelectBox";
import Button from "../../../../component/Button";
import {
  useGetAllMyChar,
  useGetCharName,
} from "../../../../hooks/myPageHooks/useUserChar";
import useOnWarning from "../../../../hooks/reduxHooks/useOnWarning";
import { useDispatch } from "react-redux";
import { onWarnings } from "../../../../../store/warningSlice/onWarning";
import SwiperModal from "./SwiperModal";
import LoadingSpinner from "../../../../component/LoadingSpinner";
import QuestionIcon from "/public/myPageImages/question.svg";
import DateSelectorBox from "./DateSelectorBox";

const MyChar = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [onModal, setOnModal] = useState<boolean>(false);

  const { data } = useGetAllMyChar({ refetchOnWindowFocus: false });

  const { mutate, isLoading } = useGetCharName({
    key: apiKey,
  });

  const { isWarning } = useOnWarning();
  const dispatch = useDispatch();

  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!apiKey) {
      alert("토큰을 입력해 주세요.");
      return;
    } else {
      dispatch(
        onWarnings({ warningType: "cube", warningLocation: "nexonAuth" })
      );
    }
  };

  return (
    <Container>
      <CharSelectBox charList={data} isAllCharLoading={isLoading} />
      {onModal && (
        <StickyView>
          <SwiperModal setOnModal={setOnModal} />
        </StickyView>
      )}
      <UserAuthLine>
        <QuestionBtn
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setOnModal(true);
          }}
        >
          <QuestionIcon width="20px" height="21px" />
        </QuestionBtn>
        <BottomForm
          onSubmit={(e: any) => {
            e.preventDefault();
          }}
        >
          <InputBox
            placeholder="토큰"
            onChange={(e: any) => setApiKey(e.target.value)}
          />
          <AuthBtn
            sort="primary"
            type="submit"
            width={isLoading ? "107px" : "83px"}
            fontWeight="500"
            onClick={handleAuthClick}
            disabled={isLoading}
          >
            <BtnInner>
              {isLoading && (
                <LoadingSpinner width={15} height={15} borderWidth={2} />
              )}
              <span>인증하기</span>
            </BtnInner>
          </AuthBtn>
        </BottomForm>
        {isWarning && (
          <StickyView>
            <DateSelectorBox mutate={mutate} />
          </StickyView>
        )}
      </UserAuthLine>
    </Container>
  );
};

export default MyChar;
const StickyView = styled.div`
  position: sticky;
  z-index: 1001;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const UserAuthLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;
const InputBox = styled.input`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.input};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  ::placeholder {
    color: ${({ theme }) => theme.subText};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
`;
const QuestionBtn = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.buttonBackground};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  color: ${({ theme }) => theme.subText};
`;
const AuthBtn = styled(Button)``;
const BottomForm = styled.form`
  display: flex;
  gap: 8px;
`;
const BtnInner = styled.span`
  display: flex;
  gap: 5px;
`;
