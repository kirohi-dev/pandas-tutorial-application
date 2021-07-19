import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BuckGrounds } from '../../themes/colors';
import { ContentHeight } from '../../themes/height';

const Header = styled.header`
  background-color: ${BuckGrounds.bgPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${ContentHeight.headerHeight};
`;

const Title = styled.h1`
  color: white;
  padding-left: 20px;
`;

export const MainHeader: React.FC = () => {
  return (
    <Header>
      <Title>pandas practice</Title>
    </Header>
  )
}
