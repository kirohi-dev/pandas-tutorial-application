import { CheckerDTO } from './dtos/CheckerDTO'
import { ExecDTO } from './dtos/ExecDTO'
import { AnswerQueryRepository } from './AnswerQueryRepository';

export class ReadAnswersUseCase {
  private repository: AnswerQueryRepository;

  constructor(repository: AnswerQueryRepository) {
    this.repository = repository;
  }

  async checker(answerId: string, body: string): Promise<CheckerDTO> {
    const result = await this.repository.checker(answerId, body);
    return result;
  }

  async exec(body: string): Promise<ExecDTO> {
    const result = await this.repository.exec(body);
    return result;
  }
}
