import { IHTTP } from '../HTTP';
import { AnswerQueryRepository } from '../../../usecases/answer/AnswerQueryRepository'
import { CheckerDTO } from '../../../usecases/answer/dtos/CheckerDTO';
import { CheckerDTOFactory } from '../../../usecases/answer/dtos/CheckerDTOFactory';
import { ExecDTO } from '../../../usecases/answer/dtos/ExecDTO';
import { ExecDTOFactory } from '../../../usecases/answer/dtos/ExecDTOFactory';

export class AnswerHTTPQueryInfrastructure implements AnswerQueryRepository {
  private http: IHTTP;

  constructor(http: IHTTP) {
    this.http = http;
  }

  async checker(answerId: string, body: string): Promise<CheckerDTO> {
    const httpResponse = await this.http.post<CheckerDTO>('/checker', {
      answer_id: answerId,
      answer: body
    });
    const factory = new CheckerDTOFactory();
    return factory.rebuildCheckerDTO(httpResponse.data.message)
  }


  async exec(body: string): Promise<ExecDTO> {
    const httpResponse = await this.http.post<ExecDTO>('/exec', {
      answer: body
    });
    const factory = new ExecDTOFactory();
    return factory.rebuildExecDTO(httpResponse.data.success, httpResponse.data.result)
  }
}
