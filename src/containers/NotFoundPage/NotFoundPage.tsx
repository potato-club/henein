import React from 'react';
import styled from 'styled-components';

export const NotFoundPage: React.FC = (props) => {
  return (
    <Container>
      <Title>404</Title>
      <Description>페이지를 찾을 수 없습니다.</Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.subText};
`;
