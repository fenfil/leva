export interface ServerErrorJSON {
  message: string;
  status: number;
  critical: boolean;
}

export class ServerError extends Error {
  message: string;

  status: number;

  critical: boolean;

  constructor(message: string, status: number, critical: boolean = false) {
    super(message);
    this.status = status;
    this.critical = critical;
  }

  toJSON(): ServerErrorJSON {
    return {
      message: this.message,
      status: this.status,
      critical: this.critical,
    };
  }
}
