import { ProblemDTO } from './dtos/ProblemDTO';

export interface ProblemQueryRepository {
  readProblem(problemId: string): Promise<ProblemDTO>;
}
