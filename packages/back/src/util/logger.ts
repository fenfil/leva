import util from 'util';

export class Logger {
  label: string;

  constructor(label: string) {
    this.label = label;
  }

  changeLabel(label: string) {
    this.label = label;
    return this;
  }

  static stringifyMsg(msgs: any[]) {
    return msgs.map((msg) => (typeof msg === 'object' ? util.inspect(msg, { depth: 3 }) : msg)).join(' ');
  }

  static log = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    console.log(`${msg}`);
  };

  static warning = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    console.warn(msg);
  };

  static info = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    console.info(msg);
  };

  static error = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    console.error(msg);
  };

  log = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    const label = this.label ? `[${this.label}]` : '';
    console.log(`${label} ${msg}`);
  };

  warning = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    const label = this.label ? `[${this.label}]` : '';
    console.warn(`${label} ${msg}`);
  };

  info = (...msgs: any[]) => {
    const msg = Logger.stringifyMsg(msgs);
    const label = this.label ? `[${this.label}]` : '';
    console.info(`${label} ${`${msg}`}`);
  };

  error = (...msgs: any[]) => {
    const label = this.label ? `[${this.label}]` : '';
    const msg = Logger.stringifyMsg(msgs);
    console.error(`${label} ${msg}`);
  };
}
