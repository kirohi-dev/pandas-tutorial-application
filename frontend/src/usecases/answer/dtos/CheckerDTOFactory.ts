import { CheckerDTO } from './CheckerDTO';

export class CheckerDTOFactory {
  rebuildCheckerDTO(message: string) {
    return new CheckerDTO(message);
  }
}
