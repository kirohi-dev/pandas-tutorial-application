export class ProblemDTO {
  readonly problemId: string;
  readonly body: string;
  readonly length: number;

  constructor(id: string, body: string, length: number) {
    this.problemId = id;
    this.body = body;
    this.length = length;
  }
}
