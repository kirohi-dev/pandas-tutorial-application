import React from "react";
import styled from "styled-components";
import { BuckGrounds } from '../../themes/colors';



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BuckGrounds.bgGray}
`

export const ComponentHeader: React.FC = () => {
  return (
    <Wrapper>
      aaaa
    </Wrapper>
  );
}
