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
import { useHintsState } from './hooks/hintRecoil'
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
  const [hints, setHints] = useHintsState();

  const [problems, setProblems] = useState<ProblemDTO[]>([]);
  const [textbooks, setTextbooks] = useState<TextbookDTO[]>([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const textbooks = await textbookUseCases.readTextbooksUseCase.readTextbook();
      const problems = await problemUseCases.readProblemsUseCase.readProblems();
      const hints = await hintUseCases.readHintsUseCase.readHints();
      setTextbooks(textbooks);
      setProblems(problems);
      setHints(hints);
    }
    fetchFunc()
  }, [])

  console.log(problems);


  return (
      <Wrapper>
        <MainHeader />
        <ContentWrapper>
          <VerticalLine />
          <ProblemWrapper><Problem body={problems[0].body}/></ProblemWrapper>
          <VerticalLine />
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
          <VerticalLine />
          <TeachWrapper>
            <TextbookWrapper>
              <Textbook />
            </TextbookWrapper>
            <HintWrapper>
              <Hint />
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
