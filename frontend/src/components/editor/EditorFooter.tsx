import React from "react";
import styled from "styled-components";
import { Button } from '../common/Button';
import { Border, BuckGrounds } from '../../themes/colors';
import { ContentHeight } from '../../themes/height';

const Wrapper = styled.div`
  width: 100%;
  height: ${ContentHeight.pagerHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${BuckGrounds.bgDarkGray};
  border-top: 1px solid ${Border.bdGray};
  padding: 10px;
`

const ButtonWrapper = styled.div`
  width: 100px;
  margin-left: 10px;
`

const Execute: React.FC = () => {
  return (
    <>
      実行
    </>
  )
}

const Answer: React.FC = () => {
  return (
    <>
      解答する
    </>
  )
}

interface IEditorFooter {
  exec: VoidFunction;
  checker: VoidFunction;
}

export const EditorFooter: React.FC<IEditorFooter> = (props) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={props.exec}>
       <Button innerComponent={<Execute />} bgColor={'bgBlue'} bgHoverColor={'bgLightBlue'} />
      </ButtonWrapper>
      <ButtonWrapper onClick={props.checker}>
       <Button innerComponent={<Answer />} bgColor={'bgDeepPurple'} bgHoverColor={'bgLightPurple'} />
      </ButtonWrapper>
    </Wrapper>
  );
}
