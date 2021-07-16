import { TextbookDTO } from './dtos/TextbookDTO';

export interface TextbookQueryRepository {
  readTextbooks(): Promise<Array<TextbookDTO>>;
}
