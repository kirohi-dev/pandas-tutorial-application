import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import logo from './logo.svg';
import './App.css';
import { textbookUseCases, answerUseCases, problemUseCases, hintUseCases } from './di';
import { useHintsState } from './hooks/hintRecoil'
import { ProblemDTO } from './usecases/problem/dtos/ProblemDTO'
import { TextbookDTO } from './usecases/textbook/dtos/TextbookDTO'

console.log(textbookUseCases.readTextbooksUseCase.readTextbook())
console.log(answerUseCases.readAnswersUseCase.readAnswers())
console.log(problemUseCases.readProblemsUseCase.readProblems())
console.log(hintUseCases.readHintsUseCase.readHints())

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {hints[0] && (
            <p>{hints[0].id}</p>
          )}
          {hints.length && hints.map((hint) => (
            <div key={hint.id}>
              <p >{hint.id}</p>
              <p>{hint.page}</p>
              <p>{hint.problemId}</p>
            </div>
          ))}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
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
