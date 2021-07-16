import { TextbookDTO } from '../../usecases/textbook/dtos/TextbookDTO'
import { TextbookQueryRepository } from './TextbookQueryRepository';

export class ReadTextbooksUseCase {
  private repository: TextbookQueryRepository;

  constructor(repository: TextbookQueryRepository) {
    this.repository = repository;
  }
  async readTextbook(): Promise<Array<TextbookDTO>> {
    const textbooks = await this.repository.readTextbooks();
    return textbooks;
  }
}
