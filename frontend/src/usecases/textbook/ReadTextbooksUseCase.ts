import { TextbookDTO } from '../../usecases/textbook/dtos/TextbookDTO'
import { TextbookQueryRepository } from './TextbookQueryRepository';

export class ReadTextbooksUseCase {
  private repository: TextbookQueryRepository;

  constructor(repository: TextbookQueryRepository) {
    this.repository = repository;
  }
  async readTextbook(problemId: string): Promise<TextbookDTO> {
    const textbooks = await this.repository.readTextbook(problemId);
    return textbooks;
  }
}
