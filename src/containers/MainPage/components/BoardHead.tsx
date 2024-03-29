import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ChevronRightIcon from "/public/mainPageImages/chevron_right.svg";
import useDarkMode from "../../../hooks/reduxHooks/useDarkMode";

export type BoardHeadProps = {
  boardTitle: string;
};

const BoardHead = ({ boardTitle }: BoardHeadProps) => {
  const darkModeState = useDarkMode();

  return (
    <BoardHeader darkModeState={darkModeState}>
      <Link href={`board/${boardTitle}`}>
        <Title>
          {boardTitle}
          <ImgDiv>
            <ChevronRightIcon width="10px" height="10px" />
          </ImgDiv>
        </Title>
      </Link>
    </BoardHeader>
  );
};
export default BoardHead;

const BoardHeader = styled.div<{ darkModeState: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.cardHeader};
  z-index: 1;
  box-shadow: ${({ theme }) => `0px 4px 8px ${theme.boxShadow}`};
  padding-left: 24px;
  svg {
    color: ${({ theme }) => theme.text};
  }
`;
const Title = styled.h3`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.brand};
`;
