export type HttpRequest = {
  headers: any
  body: any
  pathParameters: any
  userId?: string
  queryStringParameters: any
}

export type HttpResponse = {
  statusCode: number
  body?: any
  headers?: any
}
