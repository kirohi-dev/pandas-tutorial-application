import { ProblemDTO } from './ProblemDTO';

export class ProblemDTOFactory {
  rebuildProblemDTO(problem_id: string, body: string, length: number) {
    return new ProblemDTO(problem_id, body, length);
  }
}
