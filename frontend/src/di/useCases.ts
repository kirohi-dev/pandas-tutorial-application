import { infrastructures } from './infrastructures';
import { ReadTextbooksUseCase } from '../usecases/textbook/ReadTextbooksUseCase';
import { ReadAnswersUseCase } from '../usecases/answer/ReadAnswersUseCase';
import { ReadHintsUseCase } from '../usecases/hint/ReadHintsUseCase';
import { ReadProblemsUseCase } from '../usecases/problem/ReadProblemsUseCase';


export const textbookUseCases =  {
  readTextbooksUseCase: new ReadTextbooksUseCase(infrastructures.textbookHTTPQueryInfrastructure),
}
export const answerUseCases =  {
  readAnswersUseCase: new ReadAnswersUseCase(infrastructures.answerHTTPQueryInfrastructure),
}
export const hintUseCases =  {
  readHintsUseCase: new ReadHintsUseCase(infrastructures.hintHTTPQueryInfrastructure),
}
export const problemUseCases =  {
  readProblemsUseCase: new ReadProblemsUseCase(infrastructures.problemHTTPQueryInfrastructure),
}
