import { IHTTP } from '../HTTP';
import { AnswerQueryRepository } from '../../../usecases/answer/AnswerQueryRepository'
import { AnswerDTO } from '../../../usecases/answer/dtos/AnswerDTO';
import { AnswerDTOFactory } from '../../../usecases/answer/dtos/AnswerDTOFactory';
import { AnswerDTOHTTPResponse } from './httpResponses/AnswerDTOHTTPResponse';

export class AnswerHTTPQueryInfrastructure implements AnswerQueryRepository {
  private http: IHTTP;

  constructor(http: IHTTP) {
    this.http = http;
  }

  async readAnswers(): Promise<Array<AnswerDTO>> {
    const httpResponse = await this.http.get<AnswerDTOHTTPResponse[]>('aaaaaa');
    const factory = new AnswerDTOFactory();
    return httpResponse.data.map(hint => factory.rebuildAnswerDTO(hint.id, hint.body, hint.page, hint.problemId))
  }
}
