import { IHTTP } from '../HTTP';
import { ProblemQueryRepository } from '../../../usecases/problem/ProblemQueryRepository'
import { ProblemDTO } from '../../../usecases/problem/dtos/ProblemDTO';
import { ProblemDTOFactory } from '../../../usecases/problem/dtos/ProblemDTOFactory';
import { ProblemDTOHTTPResponse } from './httpResponses/ProblemDTOHTTPResponse';

export class ProblemHTTPQueryInfrastructure implements ProblemQueryRepository {
  private http: IHTTP;

  constructor(http: IHTTP) {
    this.http = http;
  }

  async readProblems(): Promise<Array<ProblemDTO>> {
    const httpResponse = await this.http.get<ProblemDTOHTTPResponse[]>('aaaaaa');
    const factory = new ProblemDTOFactory();
    return httpResponse.data.map(problem => factory.rebuildProblemDTO(problem.id, problem.body, problem.page))
  }
}
