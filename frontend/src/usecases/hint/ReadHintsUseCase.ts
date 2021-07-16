import { HintDTO } from './dtos/HintDTO'
import { HintQueryRepository } from './HintQueryRepository';

export class ReadHintsUseCase {
  private repository: HintQueryRepository;

  constructor(repository: HintQueryRepository) {
    this.repository = repository;
  }
  async readHints(): Promise<Array<HintDTO>> {
    const problems = await this.repository.readHints();
    return problems;
  }
}
