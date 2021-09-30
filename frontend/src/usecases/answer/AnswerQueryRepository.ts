import { CheckerDTO } from './dtos/CheckerDTO';
import { ExecDTO } from './dtos/ExecDTO';

export interface AnswerQueryRepository {
  checker(answerId: string, body: string): Promise<CheckerDTO>;
  exec(body: string): Promise<ExecDTO>;
}
