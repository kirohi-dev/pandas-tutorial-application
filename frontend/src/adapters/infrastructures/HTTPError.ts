export class HttpError extends Error {
  readonly status: string;

  constructor(message: string, status: string) {
    super(message);
    this.status = status
  }
}
