import { IHTTP } from '../HTTP';
import { HintQueryRepository } from '../../../usecases/hint/HintQueryRepository'
import { HintDTO } from '../../../usecases/hint/dtos/HintDTO';
import { HintDTOFactory } from '../../../usecases/hint/dtos/HintDTOFactory';
import { HintDTOHTTPResponse } from './httpResponses/HintDTOHTTPResponse';

export class HintHTTPQueryInfrastructure implements HintQueryRepository {
  private http: IHTTP;

  constructor(http: IHTTP) {
    this.http = http;
  }

  async readHints(): Promise<Array<HintDTO>> {
    const httpResponse = await this.http.get<HintDTOHTTPResponse[]>('aaaaaa');
    const factory = new HintDTOFactory();
    return httpResponse.data.map(hint => factory.rebuildHintDTO(hint.id, hint.body, hint.page, hint.problemId))
  }
}
