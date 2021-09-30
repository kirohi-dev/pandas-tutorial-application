import { TextbookDTO } from './dtos/TextbookDTO';

export interface TextbookQueryRepository {
  readTextbook(problemId: string): Promise<TextbookDTO>;
}
