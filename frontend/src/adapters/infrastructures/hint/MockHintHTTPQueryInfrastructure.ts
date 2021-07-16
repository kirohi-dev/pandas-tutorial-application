import { v4 } from 'uuid';
import { HintQueryRepository } from '../../../usecases/hint/HintQueryRepository'
import { HintDTO } from '../../../usecases/hint/dtos/HintDTO';
import { HintDTOFactory } from '../../../usecases/hint/dtos/HintDTOFactory';
import { HintDTOHTTPResponse } from './httpResponses/HintDTOHTTPResponse';

export class MockHintHTTPQueryInfrastructure implements HintQueryRepository {
  async readHints(): Promise<Array<HintDTO>> {
    const mockHttpResponse: HintDTOHTTPResponse[] = [
      {
        id: v4(),
        body: 'aaaaa',
        page: '1',
        problemId: '1'
      },
      {
        id: v4(),
        body: 'bbbbb',
        page: '2',
        problemId: '2'
      },
      {
        id: v4(),
        body: 'ccccc',
        page: '3',
        problemId: '3'
      },
    ];
    const factory = new HintDTOFactory();
    return Promise.resolve(mockHttpResponse.map(hint => factory.rebuildHintDTO(hint.id, hint.body, hint.page, hint.problemId)));
  }
}
