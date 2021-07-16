import { v4 } from 'uuid';
import { TextbookQueryRepository } from '../../../usecases/textbook/TextbookQueryRepository'
import { TextbookDTO } from '../../../usecases/textbook/dtos/TextbookDTO';
import { TextbookDTOFactory } from '../../../usecases/textbook/dtos/TextbookDTOFactory';
import { TextbookDTOHTTPResponse } from './httpResponses/TextbookDTOHTTPResponse';

export class MockTextbookHTTPQueryInfrastructure implements TextbookQueryRepository {
  async readTextbooks(): Promise<Array<TextbookDTO>> {
    const mockHttpResponse: TextbookDTOHTTPResponse[] = [
      {
        id: v4(),
        body: 'aaaaa',
        page: '1'
      },
      {
        id: v4(),
        body: 'bbbbb',
        page: '2'
      },
      {
        id: v4(),
        body: 'ccccc',
        page: '3'
      },
    ];
    const factory = new TextbookDTOFactory();
    return Promise.resolve(mockHttpResponse.map(textbook => factory.rebuildTextbookDTO(textbook.id, textbook.body, textbook.page)));
  }
}
