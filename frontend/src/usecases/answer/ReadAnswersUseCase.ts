import { AnswerDTO } from './dtos/AnswerDTO'
import { AnswerQueryRepository } from './AnswerQueryRepository';

export class ReadAnswersUseCase {
  private repository: AnswerQueryRepository;

  constructor(repository: AnswerQueryRepository) {
    this.repository = repository;
  }
  async readAnswers(): Promise<Array<AnswerDTO>> {
    const problems = await this.repository.readAnswers();
    return problems;
  }
}
