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

  async readHint(problemId: string): Promise<HintDTO> {
    const httpResponse = await this.http.get<HintDTOHTTPResponse>(`/hints/${problemId}`);
    const factory = new HintDTOFactory();
    return factory.rebuildHintDTO(httpResponse.data.problemId, httpResponse.data.body)
  }
}
