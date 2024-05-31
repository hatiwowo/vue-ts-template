import type { MockMethod } from 'vite-plugin-mock'

const mockApi: MockMethod = {
  url: '/api/mock',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: 'mock',
    }
  },

}

export default [mockApi]
