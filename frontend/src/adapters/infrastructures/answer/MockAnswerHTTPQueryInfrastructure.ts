import { v4 } from 'uuid';
import { AnswerQueryRepository } from '../../../usecases/answer/AnswerQueryRepository'
import { AnswerDTO } from '../../../usecases/answer/dtos/AnswerDTO';
import { AnswerDTOFactory } from '../../../usecases/answer/dtos/AnswerDTOFactory';
import { AnswerDTOHTTPResponse } from './httpResponses/AnswerDTOHTTPResponse';

export class MockAnswerHTTPQueryInfrastructure implements AnswerQueryRepository {
  async readAnswers(): Promise<Array<AnswerDTO>> {
    const mockHttpResponse: AnswerDTOHTTPResponse[] = [
      {
        id: v4(),
        body: 'aaaaa',
        page: '1',
        problemId: '1'
      },
      {
        id: v4(),
        body: 'bbbbb',
        page: '2',
        problemId: '2'
      },
      {
        id: v4(),
        body: 'ccccc',
        page: '3',
        problemId: '3'
      },
    ];
    const factory = new AnswerDTOFactory();
    return Promise.resolve(mockHttpResponse.map(hint => factory.rebuildAnswerDTO(hint.id, hint.body, hint.page, hint.problemId)));
  }
}
