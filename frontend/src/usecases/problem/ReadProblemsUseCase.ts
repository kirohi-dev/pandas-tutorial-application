import { ProblemDTO } from './dtos/ProblemDTO'
import { ProblemQueryRepository } from './ProblemQueryRepository';

export class ReadProblemsUseCase {
  private repository: ProblemQueryRepository;

  constructor(repository: ProblemQueryRepository) {
    this.repository = repository;
  }
  async readProblem(problemId: string): Promise<ProblemDTO> {
    const problem = await this.repository.readProblem(problemId);
    return problem;
  }
}
