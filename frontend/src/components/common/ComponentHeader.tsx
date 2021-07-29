import React, { ReactChild } from "react";
import styled from "styled-components";
import { BuckGrounds, Texts } from '../../themes/colors';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${BuckGrounds.bgGray};
  color: ${Texts.txBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`

const RightItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  margin: 0 5px;
`

type Props = {
  title: string;
  iconComponent: ReactChild
}

export const ComponentHeader: React.FC<Props> = ({title, iconComponent}) => {
  return (
    <Wrapper>
      <RightItem>
        <IconWrapper>
          {iconComponent}
        </IconWrapper>
        <div>{title}</div>
      </RightItem>
      <IconWrapper><OpenInNewIcon /></IconWrapper>
    </Wrapper>
  );
}
