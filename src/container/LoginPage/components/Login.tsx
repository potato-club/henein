import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";
import { customColor } from "../../../constants/customColor";
import Image from "next/image";
import kaKao from "/public/loginPageImages/KaKao.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };
  return (
    <Container onSubmit={handleSubmit(submit)}>
      <Title>로그인</Title>
      <Id type="text" placeholder="이메일" {...register("id")} />
      <PassWord type="text" placeholder="비밀번호" {...register("password")} />
      <LoginBtn type="submit">로그인</LoginBtn>
      <SignUpContents>
        <LeftBtn type="button">로그인이 안되시나요?</LeftBtn>
        <RightBtn type="button">회원가입</RightBtn>
      </SignUpContents>
      <Lines>
        <Line />
        <MidLineTextDiv>또는</MidLineTextDiv>
        <Line />
      </Lines>
      <KaKaoBtn type="button">
        <KaKaoDiv>
          <KaKaoImg src={kaKao} alt="s" />
          <span>KaKao로 로그인하기</span>
        </KaKaoDiv>
      </KaKaoBtn>
    </Container>
  );
};

export default Login;

const KaKaoImg = styled(Image)`
  position: absolute;
  left: 14px;
  width: 17px;
  height: 17px;
`;
const KaKaoDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const Container = styled.form`
  justify-content: space-between;
  border: 1px solid ${customColor.whiteGray};
  width: 380px;
  height: 450px;
  background-color: ${customColor.white};
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  padding: 20px 24px;
`;
const Title = styled.span`
  padding: 8px;
  font-size: 24px;
  font-weight: 900;
`;
const Id = styled.input`
  border: 1px solid ${customColor.whiteGray};
  border-radius: 32px;
  width: 100%;
  height: 41px;
  padding-left: 14px;
  font-size: 14px;
`;
const PassWord = styled.input`
  border: 1px solid ${customColor.whiteGray};
  border-radius: 32px;
  width: 100%;
  height: 41px;
  padding-left: 14px;
  font-size: 14px;
`;
const LoginBtn = styled.button`
  background-color: ${customColor.orange};
  color: white;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 41px;
  border-radius: 16px;
  &:hover {
    background-color: ${customColor.darkOrange};
  }
  &:active {
    transform: scale(0.98);
  }
`;
const SignUpContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Lines = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.hr`
  width: calc((100% - 30px) / 2);
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const MidLineTextDiv = styled.div`
  font-size: 10px;
  color: ${customColor.darkGray};
  width: 30px;
  text-align: center;
`;
const KaKaoBtn = styled.button`
  border-radius: 16px;
  border: 1px solid ${customColor.whiteGray};
  background-color: ${customColor.yellow};
  font-size: 14px;
  color: ${customColor.black};
  width: 100%;
  height: 41px;
  &:hover {
    background-color: ${customColor.darkYellow};
  }
  &:active {
    transform: scale(0.98);
  }
`;
const LeftBtn = styled.button`
  font-size: 12px;
  color: ${customColor.darkGray};
`;
const RightBtn = styled.button`
  font-size: 12px;
  color: ${customColor.orange};
  font-weight: 900;
`;
