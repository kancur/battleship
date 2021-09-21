/* eslint-disable max-classes-per-file */
export class OverlapError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OverlapError';
  }
}

export class OutOfBoundsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OutOfBoundsError';
  }
}
