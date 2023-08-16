export interface ILogHandler {
  addContext(key: string, val: string): void;
  info(message: string): void;
  error(message: string): void;
}

export type LogContext = {
  key: string;
  val: string;
};
