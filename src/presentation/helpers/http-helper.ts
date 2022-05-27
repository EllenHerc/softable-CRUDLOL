import { ServerError } from '../errors/server-error'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    errorName: error.name,
    errorMessage: error.message
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack || 'Internal Server Error'),
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: {
    errorName: error.name,
    errorMessage: error.message
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: null,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const created = (resource: any): HttpResponse => ({
  statusCode: 201,
  body: resource,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
