import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

import { MainHeader } from './components/header/MainHeader'
import { Editor } from './components/editor/Editor'
import { Problem } from './components/problem/Problem'
import { Textbook } from './components/textbook/Textbook'
import { Hint } from './components/hint/Hint'

import { Calculation, ContentHeight } from './themes/height'
import { Border } from './themes/colors'

import { textbookUseCases, problemUseCases, hintUseCases } from './di';
import { useHintState } from './hooks/hintRecoil'
import { ProblemDTO } from './usecases/problem/dtos/ProblemDTO'
import { TextbookDTO } from './usecases/textbook/dtos/TextbookDTO'


const Wrapper = styled.div`
 background-color: ${Border.bdGray};
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const EditorWrapper = styled.div`
  height: calc(${Calculation.contentCalculation});
  width: 50%;
`;

const ProblemWrapper = styled.div`
  height: calc(${Calculation.contentCalculation});
  width: 25%;
`;

const TeachWrapper = styled.div`
  width: 25%;
`;

const TextbookWrapper = styled.div`
  height: calc((${Calculation.contentCalculation}) / 2);
`;

const HintWrapper = styled.div`
  height: calc((${Calculation.contentCalculation}) / 2);
`;

const VerticalLine = styled.div`
  background-color: ${Border.bdGray};
  width: ${ContentHeight.betweenContentHeight};
  height: calc(${Calculation.contentCalculation});
`

const App: React.FC = () => {
  const [hint, setHint] = useHintState();

  const [problem, setProblem] = useState<ProblemDTO | null>(null);
  const [textbook, setTextbook] = useState<TextbookDTO | null>(null);


  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    const fetchFunc = async () => {
      const textbook = await textbookUseCases.readTextbooksUseCase.readTextbook(String(counter));
      const problem = await problemUseCases.readProblemsUseCase.readProblem(String(counter));
      const hint = await hintUseCases.readHintsUseCase.readHint(String(counter));
      setTextbook(textbook);
      setProblem(problem);
      setHint(hint);
    }
    fetchFunc()
  }, [counter])

  const onIncrement = () => {
    if (problem && problem.length > counter) {
      setCounter(counter + 1);
    }
  }


  const onDecrement = () => {
    if (1 < counter) {
      setCounter(counter - 1);
    }
  }

  return (
      <Wrapper>
        <MainHeader />
        <ContentWrapper>
          <VerticalLine />
        <ProblemWrapper>
          <Problem
            body={problem?.body || ''}
            pageLength={problem?.length || 0}
            pager={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </ProblemWrapper>
          <VerticalLine />
          <EditorWrapper>
            <Editor counter={counter}/>
          </EditorWrapper>
          <VerticalLine />
          <TeachWrapper>
            <TextbookWrapper>
              <Textbook body={textbook?.body || ''}/>
            </TextbookWrapper>
            <HintWrapper>
              <Hint body={hint?.body || ''}/>
            </HintWrapper>
          </TeachWrapper>
          <VerticalLine />
        </ContentWrapper>
      </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
}
 
*:before,
*:after {
    box-sizing: inherit;
}
`


const AppInit: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </>
  );
}

export default AppInit;
