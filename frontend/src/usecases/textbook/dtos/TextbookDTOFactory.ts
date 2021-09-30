import { TextbookDTO } from './TextbookDTO';

export class TextbookDTOFactory {
  rebuildTextbookDTO(id: string, body: string) {
    return new TextbookDTO(id, body);
  }
}
