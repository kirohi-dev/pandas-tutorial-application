import { AnswerDTO } from './dtos/AnswerDTO';

export interface AnswerQueryRepository {
  readAnswers(): Promise<Array<AnswerDTO>>;
}
