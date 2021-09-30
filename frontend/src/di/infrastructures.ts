import { HTTP } from '../adapters/infrastructures/HTTP';
import { TextbookHTTPQueryInfrastructure } from '../adapters/infrastructures/textbook/TextbookHTTPQueryInfrastructure';
import { AnswerHTTPQueryInfrastructure } from '../adapters/infrastructures/answer/AnswerHTTPQueryInfrastructure';
import { MockAnswerHTTPQueryInfrastructure } from '../adapters/infrastructures/answer/MockAnswerHTTPQueryInfrastructure';
import { HintHTTPQueryInfrastructure } from '../adapters/infrastructures/hint/HintHTTPQueryInfrastructure';
import { ProblemHTTPQueryInfrastructure } from '../adapters/infrastructures/problem/ProblemHTTPQueryInfrastructure';


export const infrastructures = {
  textbookHTTPQueryInfrastructure:  new TextbookHTTPQueryInfrastructure(HTTP),
  answerHTTPQueryInfrastructure: process.env['REACT_APP_ENVIRONMENT'] !== 'develop' ? new AnswerHTTPQueryInfrastructure(HTTP) : new MockAnswerHTTPQueryInfrastructure(),
  hintHTTPQueryInfrastructure:  new HintHTTPQueryInfrastructure(HTTP),
  problemHTTPQueryInfrastructure: new ProblemHTTPQueryInfrastructure(HTTP),
}
