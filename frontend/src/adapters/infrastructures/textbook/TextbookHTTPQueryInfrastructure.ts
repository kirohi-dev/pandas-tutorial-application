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

  async readTextbook(problemId: string): Promise<TextbookDTO> {
    const httpResponse = await this.http.get<TextbookDTOHTTPResponse>(`/textbooks/${problemId}`);
    const factory = new TextbookDTOFactory();
    return factory.rebuildTextbookDTO(httpResponse.data.problemId, httpResponse.data.body)
  }
}
