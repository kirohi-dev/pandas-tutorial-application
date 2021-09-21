import React, { ReactChild } from "react";
import styled from "styled-components";
import { BuckGrounds, Texts, Border } from '../../themes/colors';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import { ContentHeight } from '../../themes/height';

const Wrapper = styled.div`
  width: 100%;
  height: ${ContentHeight.componentHeaderHeight};
  background-color: ${BuckGrounds.bgLightGray};
  color: ${Texts.txBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px ${Border.bdGray} solid;
`

const RightItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  margin: 0 5px;
  cursor: pointer;
`

type Props = {
  title: string;
  iconComponent: ReactChild;
  isOpen: boolean;
  action: () => void;
}

export const ComponentHeader: React.FC<Props> = ({title, iconComponent, action, isOpen}) => {
  return (
    <Wrapper>
      <RightItem>
        <IconWrapper>
          {iconComponent}
        </IconWrapper>
        <div>{title}</div>
      </RightItem>
      <IconWrapper onClick={action}>{isOpen ? <CallReceivedIcon /> : <CallMadeIcon />}</IconWrapper>
    </Wrapper>
  );
}
