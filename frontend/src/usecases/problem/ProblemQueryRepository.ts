import { ProblemDTO } from './dtos/ProblemDTO';

export interface ProblemQueryRepository {
  readProblems(): Promise<Array<ProblemDTO>>;
}
