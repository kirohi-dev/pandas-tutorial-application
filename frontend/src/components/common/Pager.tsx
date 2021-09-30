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


interface ICounter {
  pager: number;
  pageLength: number;
}

const Counter: React.FC<ICounter> = (props) => {
  return (
    <>
      {props.pager}/{props.pageLength}
    </>
  )
}

interface IPager {
  pager: number;
  pageLength: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

export const Pager: React.FC<IPager> = (props) => {
  return (
    <Wrapper>
      <ButtonWrapper>
       <Button innerComponent={<ArrowLeftIcon onClick={props.onDecrement}/>} bgColor={'bgGray'} bgHoverColor={'bgFaintGray'} />
      </ButtonWrapper>
      <Counter pager={props.pager} pageLength={props.pageLength}/>
      <ButtonWrapper>
        <Button innerComponent={<ArrowRightIcon onClick={props.onIncrement} />} bgColor={'bgGray'} bgHoverColor={'bgFaintGray'}/>
      </ButtonWrapper>
    </Wrapper>
  );
}
