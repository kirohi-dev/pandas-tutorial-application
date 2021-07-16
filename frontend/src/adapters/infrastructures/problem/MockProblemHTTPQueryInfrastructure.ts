import { v4 } from 'uuid';
import { ProblemQueryRepository } from '../../../usecases/problem/ProblemQueryRepository'
import { ProblemDTO } from '../../../usecases/problem/dtos/ProblemDTO';
import { ProblemDTOFactory } from '../../../usecases/problem/dtos/ProblemDTOFactory';
import { ProblemDTOHTTPResponse } from './httpResponses/ProblemDTOHTTPResponse';

export class MockProblemHTTPQueryInfrastructure implements ProblemQueryRepository {
  async readProblems(): Promise<Array<ProblemDTO>> {
    const mockHttpResponse: ProblemDTOHTTPResponse[] = [
      {
        id: v4(),
        body: 'aaaaa',
        page: '1'
      },
      {
        id: v4(),
        body: 'bbbbb',
        page: '2'
      },
      {
        id: v4(),
        body: 'ccccc',
        page: '3'
      },
    ];
    const factory = new ProblemDTOFactory();
    return Promise.resolve(mockHttpResponse.map(problem => factory.rebuildProblemDTO(problem.id, problem.body, problem.page)));
  }
}
