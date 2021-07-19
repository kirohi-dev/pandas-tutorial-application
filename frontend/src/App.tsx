import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import { MainHeader } from './components/header/MainHeader'
import { Editor } from './components/editor/Editor'

import { ContentHeight } from './themes/height'

import { textbookUseCases, problemUseCases, hintUseCases } from './di';
import { useHintsState } from './hooks/hintRecoil'
import { ProblemDTO } from './usecases/problem/dtos/ProblemDTO'
import { TextbookDTO } from './usecases/textbook/dtos/TextbookDTO'

const contentCalculation = `100vh - ${ContentHeight.headerHeight}`

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  background-color: gray;
`;

const EditorWrapper = styled.div`
  height: calc(${contentCalculation});
  width: 50%;
  background-color: black;
`;

const ProblemWrapper = styled.div`
  height: calc(${contentCalculation});
  width: 25%;
  background-color: pink;
`;

const TeachWrapper = styled.div`
  width: 25%;
`;

const TextbookWrapper = styled.div`
  height: calc((${contentCalculation}) / 2);
  background-color: blue; 
`;

const HintWrapper = styled.div`
  height: calc((${contentCalculation}) / 2);
  background-color: red;
`;

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


  return (
      <Wrapper>
        <MainHeader />
        <ContentWrapper>
          <ProblemWrapper></ProblemWrapper>
          <EditorWrapper>
            <Editor />
          </EditorWrapper>
          <TeachWrapper>
            <TextbookWrapper></TextbookWrapper>
            <HintWrapper></HintWrapper>
          </TeachWrapper>
        </ContentWrapper>
      </Wrapper>
  );
}

const AppInit: React.FC = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default AppInit;
