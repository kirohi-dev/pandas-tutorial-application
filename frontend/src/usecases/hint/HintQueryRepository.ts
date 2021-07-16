import { HintDTO } from './dtos/HintDTO';

export interface HintQueryRepository {
  readHints(): Promise<Array<HintDTO>>;
}
