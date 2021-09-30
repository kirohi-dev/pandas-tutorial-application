export class ExecDTO {
  readonly success: boolean;
  readonly result: string;

  constructor(success: boolean, result: string) {
    this.success = success;
    this.result = result;
  }
}
