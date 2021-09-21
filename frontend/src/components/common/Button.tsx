import React, { ReactNode } from "react";
import styled from "styled-components";
import { BuckGrounds } from '../../themes/colors';
import { ContentHeight } from '../../themes/height'

type WrapperProp = {
  bgColor?: keyof typeof BuckGrounds;
  bgHoverColor?: keyof typeof BuckGrounds;
}

const Wrapper = styled.div`
  width: 100%;
  height: ${ContentHeight.buttonHeight};
  background-color: ${(props: WrapperProp) => 
    props.bgColor ? BuckGrounds[props.bgColor] : 'inherit'
  };
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${(props: WrapperProp) => 
    props.bgHoverColor ? BuckGrounds[props.bgHoverColor] : 'black'
  };
  }
`

type Props = {
  bgColor?: keyof typeof BuckGrounds;
  bgHoverColor?: keyof typeof BuckGrounds;
  innerComponent: ReactNode;
}

export const Button: React.FC<Props> = ({ bgColor, bgHoverColor, innerComponent }) => {
  return (
    <Wrapper bgColor={bgColor} bgHoverColor={bgHoverColor}>
      {innerComponent}
    </Wrapper>
  );
}
