export class ServerError extends Error {
  message = 'Something is wrong with our server'
}

export class BadFormartError extends Error {
  message = 'Bad format, GIF is not valid'
}
