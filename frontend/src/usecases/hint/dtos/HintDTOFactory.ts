import { HintDTO } from './HintDTO';

export class HintDTOFactory {
  rebuildHintDTO(problemId: string, body: string) {
    return new HintDTO(body, problemId);
  }
}
