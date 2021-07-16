import { ProblemDTO } from './ProblemDTO';

export class ProblemDTOFactory {
  rebuildProblemDTO(id: string, body: string, page: string) {
    return new ProblemDTO(id, body, page);
  }
}
