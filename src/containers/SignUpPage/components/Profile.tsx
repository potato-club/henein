import React from "react";
import styled from "styled-components";
import Button from "../../../component/Button";
import { customColor } from "../../../constants/customColor";
import Image from "next/image";
import circle from "/public/detailPageImages/Ellipse.png";
import { FieldValues, useForm } from "react-hook-form";
import { FormInputCss } from "../../LoginPage/components/Login";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };
  return (
    <Container onSubmit={handleSubmit(submit)}>
      <Title>프로필</Title>
      <ProfileImg src={circle} alt="none"></ProfileImg>
      <Nickname type="text" placeholder="닉네임" {...register("nickname")} />
      <CompletionBtn
        type="submit"
        sort="main"
        width="100%"
        height="38px"
        fontWeight="900"
      >
        완료
      </CompletionBtn>
    </Container>
  );
};

export default Profile;

const Title = styled.div`
  padding: 8px;
  font-size: 20px;
  font-weight: 900;
`;
const ProfileImg = styled(Image)`
  margin: 0 auto;
  width: 128px;
  height: 128px;
`;
const Nickname = styled.input`
  ${FormInputCss}
`;
const CompletionBtn = styled(Button)``;
const Container = styled.form`
  z-index: 1;
  justify-content: space-between;
  border: 1px solid ${customColor.whiteGray};
  width: 380px;
  height: 383px;
  background-color: ${customColor.white};
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  padding: 20px 24px;
`;