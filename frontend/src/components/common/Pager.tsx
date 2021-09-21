import React from "react";
import styled from "styled-components";
import { Button } from './Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonWrapper = styled.div`
  width: 100px;
`

const Counter: React.FC = () => {
  return (
    <>
      1/2
    </>
  )
}

export const Pager: React.FC = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
       <Button innerComponent={<ArrowLeftIcon />} bgColor={'bgGray'} bgHoverColor={'bgFaintGray'} />
      </ButtonWrapper>
      <Counter />
      <ButtonWrapper>
       <Button innerComponent={<ArrowRightIcon />} bgColor={'bgGray'} bgHoverColor={'bgFaintGray'} />
      </ButtonWrapper>
    </Wrapper>
  );
}
