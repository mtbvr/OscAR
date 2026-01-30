export interface AppErrorParams {
  userMessage: string; // safe message to show to end-user / front
  statusCode?: number; // http status code
  details?: any; // optional structured details for the frontend
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly userMessage: string;
  public readonly details?: any;

  constructor({ userMessage, statusCode = 400, details}: AppErrorParams) {
      super();
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.userMessage = userMessage;
    this.details = details;

    Error.captureStackTrace?.(this, this.constructor);
  }

  // Safe payload intended to be sent to the client/front
  public toClient() {
    return {
      message: this.userMessage,
      statusCode: this.statusCode,
      details: this.details ?? undefined,
    };
  }
}

export default AppError;
