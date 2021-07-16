import { IHTTP } from '../HTTP';
import { TextbookQueryRepository } from '../../../usecases/textbook/TextbookQueryRepository'
import { TextbookDTO } from '../../../usecases/textbook/dtos/TextbookDTO';
import { TextbookDTOFactory } from '../../../usecases/textbook/dtos/TextbookDTOFactory';
import { TextbookDTOHTTPResponse } from './httpResponses/TextbookDTOHTTPResponse';

export class TextbookHTTPQueryInfrastructure implements TextbookQueryRepository {
  private http: IHTTP;

  constructor(http: IHTTP) {
    this.http = http;
  }

  async readTextbooks(): Promise<Array<TextbookDTO>> {
    const httpResponse = await this.http.get<TextbookDTOHTTPResponse[]>('aaaaaa');
    const factory = new TextbookDTOFactory();
    return httpResponse.data.map((textbook) => factory.rebuildTextbookDTO(textbook.id, textbook.body, textbook.page))
  }
}
