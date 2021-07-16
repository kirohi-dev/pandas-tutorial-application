import { TextbookDTO } from './TextbookDTO';

export class TextbookDTOFactory {
  rebuildTextbookDTO(id: string, body: string, page: string) {
    return new TextbookDTO(id, body, page);
  }
}
