export class ProblemDTO {
  readonly id: string;
  readonly body: string;
  readonly page: string;

  constructor(id: string, body: string, page: string) {
    this.id = id;
    this.body = body;
    this.page = page;
  }
}
