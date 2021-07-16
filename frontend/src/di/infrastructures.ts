import { HTTP } from '../adapters/infrastructures/HTTP';
import { TextbookHTTPQueryInfrastructure } from '../adapters/infrastructures/textbook/TextbookHTTPQueryInfrastructure';
import { MockTextbookHTTPQueryInfrastructure } from '../adapters/infrastructures/textbook/MockTextbookHTTPQueryInfrastructure';
import { AnswerHTTPQueryInfrastructure } from '../adapters/infrastructures/answer/AnswerHTTPQueryInfrastructure';
import { MockAnswerHTTPQueryInfrastructure } from '../adapters/infrastructures/answer/MockAnswerHTTPQueryInfrastructure';
import { HintHTTPQueryInfrastructure } from '../adapters/infrastructures/hint/HintHTTPQueryInfrastructure';
import { MockHintHTTPQueryInfrastructure } from '../adapters/infrastructures/hint/MockHintHTTPQueryInfrastructure';
import { ProblemHTTPQueryInfrastructure } from '../adapters/infrastructures/problem/ProblemHTTPQueryInfrastructure';
import { MockProblemHTTPQueryInfrastructure } from '../adapters/infrastructures/problem/MockProblemHTTPQueryInfrastructure';


export const infrastructures = {
  textbookHTTPQueryInfrastructure: process.env['REACT_APP_ENVIRONMENT'] !== 'develop' ? new TextbookHTTPQueryInfrastructure(HTTP) : new MockTextbookHTTPQueryInfrastructure(),
  answerHTTPQueryInfrastructure: process.env['REACT_APP_ENVIRONMENT'] !== 'develop' ? new AnswerHTTPQueryInfrastructure(HTTP) : new MockAnswerHTTPQueryInfrastructure(),
  hintHTTPQueryInfrastructure: process.env['REACT_APP_ENVIRONMENT'] !== 'develop' ? new HintHTTPQueryInfrastructure(HTTP) : new MockHintHTTPQueryInfrastructure(),
  problemHTTPQueryInfrastructure: process.env['REACT_APP_ENVIRONMENT'] !== 'develop' ? new ProblemHTTPQueryInfrastructure(HTTP) : new MockProblemHTTPQueryInfrastructure(),
}
