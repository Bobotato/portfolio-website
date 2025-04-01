export class APIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'APIError'
  }
}

export class APIResponseMalformedError extends APIError {
  constructor(message: string) {
    super(message)
    this.name = 'APIResponseMalformedError'
  }
}

export class APIServerDownError extends APIError {
  constructor(message: string) {
    super(message)
    this.name = 'APIServerDownError'
  }
}