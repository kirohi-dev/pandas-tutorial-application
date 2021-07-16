import { AnswerDTO } from './AnswerDTO';

export class AnswerDTOFactory {
  rebuildAnswerDTO(id: string, body: string, page: string, problemId: string) {
    return new AnswerDTO(id, body, page, problemId);
  }
}
