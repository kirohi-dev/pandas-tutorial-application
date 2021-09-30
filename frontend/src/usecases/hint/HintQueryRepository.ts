import { HintDTO } from './dtos/HintDTO';

export interface HintQueryRepository {
  readHint(problemId: string): Promise<HintDTO>;
}
