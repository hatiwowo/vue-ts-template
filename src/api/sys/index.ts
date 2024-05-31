import http from '../http'

export function mockApi() {
  return http.Get<string>('/mock')
}
