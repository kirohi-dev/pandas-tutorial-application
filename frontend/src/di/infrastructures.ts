import { HTTP } from '../adapters/infrastructures/HTTP';
import { TextbookHTTPQueryInfrastructure } from '../adapters/infrastructures/textbook/TextbookHTTPQueryInfrastructure';
import { AnswerHTTPQueryInfrastructure } from '../adapters/infrastructures/answer/AnswerHTTPQueryInfrastructure';
import { HintHTTPQueryInfrastructure } from '../adapters/infrastructures/hint/HintHTTPQueryInfrastructure';
import { ProblemHTTPQueryInfrastructure } from '../adapters/infrastructures/problem/ProblemHTTPQueryInfrastructure';


export const infrastructures = {
  textbookHTTPQueryInfrastructure:  new TextbookHTTPQueryInfrastructure(HTTP),
  answerHTTPQueryInfrastructure: new AnswerHTTPQueryInfrastructure(HTTP),
  hintHTTPQueryInfrastructure:  new HintHTTPQueryInfrastructure(HTTP),
  problemHTTPQueryInfrastructure: new ProblemHTTPQueryInfrastructure(HTTP),
}
