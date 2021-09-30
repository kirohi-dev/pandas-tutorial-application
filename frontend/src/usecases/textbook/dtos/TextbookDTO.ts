export class TextbookDTO {
  readonly problemId: string;
  readonly body: string;

  constructor(problemId: string, body: string) {
    this.problemId = problemId;
    this.body = body;
  }
}
