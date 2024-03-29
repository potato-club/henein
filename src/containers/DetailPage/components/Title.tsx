import React from "react";
import styled from "styled-components";
import Schedule from "/public/detailPageImages/schedule.svg";
import Visibility from "/public/detailPageImages/visibility.svg";
import Image from "next/image";
import timeDifference from "../../../utils/timeDifference";
import useScroll from "../../../hooks/scrollHooks/useScroll";

interface ITitle {
  title: string;
  name: string;
  views: number;
  createTime: string;
}

const Title = ({ title, name, views, createTime }: ITitle) => {
  const { isScrollDown } = useScroll();

  return (
    <Container isScrollDown={isScrollDown}>
      <Name>{title}</Name>
      <WriteState>
        <NicknameAndFloor>
          <Nickname>{name}</Nickname>
        </NicknameAndFloor>
        <TimeAndWatch>
          <Time suppressHydrationWarning={true}>
            <Schedule width="16px" height="16px" />
            {timeDifference(createTime)}
          </Time>
          <Watch>
            <Visibility width="16px" height="16px" />
            {views}
          </Watch>
        </TimeAndWatch>
      </WriteState>
    </Container>
  );
};

export default Title;
const Container = styled.div<{ isScrollDown: boolean }>`
  position: sticky;
  top: ${({ isScrollDown }) => (isScrollDown ? "16px" : "88px")};
  transition: top 0.2s ease-in-out;
  box-shadow: ${({ theme }) => `0px 4px 8px ${theme.boxShadow}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  min-height: 97px;
  border-bottom: 1px solid ${(prop) => prop.theme.border};
  padding: 0 24px;
  background-color: ${(prop) => prop.theme.cardHeader};
  backdrop-filter: blur(4px);
  svg {
    margin-right: 4px;
  }
`;

const Nickname = styled.div`
  margin-right: 4px;
  font-size: 12px;
  color: ${(prop) => prop.theme.subText};
`;
const TimeAndWatch = styled.div`
  display: flex;
  align-items: center;
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 12px;
  color: ${(prop) => prop.theme.subText};
`;
const Watch = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(prop) => prop.theme.subText};
`;
const NicknameAndFloor = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(prop) => prop.theme.text};
`;
const WriteState = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
