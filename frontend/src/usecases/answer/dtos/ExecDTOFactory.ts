import { ExecDTO } from './ExecDTO';

export class ExecDTOFactory {
  rebuildExecDTO(success: boolean, result: string) {
    return new ExecDTO(success, result);
  }
}
