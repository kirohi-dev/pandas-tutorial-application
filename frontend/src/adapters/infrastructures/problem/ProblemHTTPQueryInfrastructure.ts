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

  async readProblem(problemId: string): Promise<ProblemDTO> {
    const httpResponse = await this.http.get<ProblemDTOHTTPResponse>(`/problems/${problemId}`);
    const factory = new ProblemDTOFactory();
    return factory.rebuildProblemDTO(httpResponse.data.problemId, httpResponse.data.body, httpResponse.data.length)
  }
}
