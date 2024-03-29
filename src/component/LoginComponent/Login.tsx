import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../Button";
import { useUserInfo } from "../../hooks/user/useUserInfo";
import CompleteLogin from "./CompleteLogin";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../../../store/userInfoSlice/userInfo";
import LoadingSpinner from "../LoadingSpinner";

const Login = () => {
  const { data, isLoading } = useUserInfo({
    options: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(
        saveUserInfo({ userName: data.userName, userRole: data.userRole })
      );
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <LoginContainer isLoading={isLoading}>
        <LoadingSpinner width={15} height={15} borderWidth={2} />
      </LoginContainer>
    );
  }
  return (
    <>
      {data ? (
        <CompleteLogin {...data} />
      ) : (
        <LoginContainer isLoading={isLoading}>
          <Link href="/login">
            <LoginBtn
              type="submit"
              sort="primary"
              width="252px"
              fontWeight="700"
            >
              로그인
            </LoginBtn>
          </Link>
          <LoginFooter>
            <Text>로그인이 안 되시나요?</Text>
            <Link href="/register">
              <RegisterButton>회원가입</RegisterButton>
            </Link>
          </LoginFooter>
        </LoginContainer>
      )}
    </>
  );
};

export default Login;
const Text = styled.span`
  color: ${({ theme }) => theme.subText};
  font-size: 12px;
`;
const RegisterButton = styled.button`
  color: ${({ theme }) => theme.brand};
  border: none;
  background-color: ${({ theme }) => theme.card};
  font-size: 12px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
const LoginFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const LoginBtn = styled(Button)``;
const LoginContainer = styled.div<{ isLoading: boolean }>`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  width: 300px;
  height: 118px;
  gap: 16px;
`;
