import { TextbookDTO } from '../textbook/dtos/TextbookDTO'
import { ProblemQueryRepository } from './ProblemQueryRepository';

export class ReadProblemsUseCase {
  private repository: ProblemQueryRepository;

  constructor(repository: ProblemQueryRepository) {
    this.repository = repository;
  }
  async readProblems(): Promise<Array<TextbookDTO>> {
    const problems = await this.repository.readProblems();
    return problems;
  }
}
