export class HintDTO {
  readonly body: string;
  readonly problemId: string;

  constructor(body: string, problemId: string) {
    this.body = body;
    this.problemId = problemId;
  }
}
