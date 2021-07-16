import { HintDTO } from './HintDTO';

export class HintDTOFactory {
  rebuildHintDTO(id: string, body: string, page: string, problemId: string) {
    return new HintDTO(id, body, page, problemId);
  }
}
