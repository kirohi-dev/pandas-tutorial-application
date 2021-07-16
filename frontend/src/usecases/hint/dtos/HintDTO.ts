export class HintDTO {
  readonly id: string;
  readonly body: string;
  readonly page: string;
  readonly problemId: string;

  constructor(id: string, body: string, page: string, problemId: string) {
    this.id = id;
    this.body = body;
    this.page = page;
    this.problemId = problemId;
  }
}
