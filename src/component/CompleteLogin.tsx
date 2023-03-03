import React from "react";
import styled from "styled-components";
import { customColor } from "../constants/customColor";
import Image from "next/image";
import circle from "/public/detailPageImages/Ellipse.png";
import Tag from "./Tag";

const CompleteLogin = () => {
  return (
    <LoginContainer>
      <LoginHeader>
        <RepresentativeImage src={circle} alt="none"></RepresentativeImage>
        <Profile>
          <Nickname>프돔이</Nickname>
          <Honours>
            <Tag type="level">2150</Tag>
            <Tag type="floor">49층</Tag>
            <Tag type="job">전사</Tag>
          </Honours>
        </Profile>
      </LoginHeader>
      <LoginFooter>
        <MyInfo>내 정보</MyInfo>
        <LogOut>로그아웃</LogOut>
      </LoginFooter>
    </LoginContainer>
  );
};

export default CompleteLogin;
const MyInfo = styled.div`
  font-size: 12px;
  font-weight: 900;
  color: ${customColor.darkGray};
  &:hover {
    cursor: pointer;
  }
`;
const LogOut = styled.div`
  font-size: 12px;
  font-weight: 900;
  color: ${customColor.orange};
  &:hover {
    cursor: pointer;
  }
`;
const LoginFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Level = styled.div`
  padding: 2px 4px;
  color: ${customColor.white};
  font-size: 10px;
  background-color: ${customColor.level};
  border-radius: 8px;
  margin-right: 4px;
`;
const Floor = styled.div`
  padding: 2px 4px;
  color: ${customColor.white};
  font-size: 10px;
  background-color: ${customColor.floor};
  border-radius: 8px;
`;
const Honours = styled.div`
  display: flex;
`;
const Nickname = styled.div`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const RepresentativeImage = styled(Image)`
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const LoginContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  align-items: initial;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${customColor.whiteGray};
  border-radius: 32px;
  width: 300px;
  height: 118px;
`;