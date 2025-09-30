export class CriticalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CriticalError";
  }
}

export function throwCriticalError(message: string): never {
  throw new CriticalError(message);
}
