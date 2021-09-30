import { HintDTO } from './dtos/HintDTO'
import { HintQueryRepository } from './HintQueryRepository';

export class ReadHintsUseCase {
  private repository: HintQueryRepository;

  constructor(repository: HintQueryRepository) {
    this.repository = repository;
  }
  async readHint(problemId: string): Promise<HintDTO> {
    const problems = await this.repository.readHint(problemId);
    return problems;
  }
}
