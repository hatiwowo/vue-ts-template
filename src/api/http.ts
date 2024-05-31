import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

const http = createAlova({
  baseURL: import.meta.env.VITE_API_URL,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest(method) {
    method.config.headers.token = 'token'
  },
  responded: {
    onSuccess: async (response) => {
      const json = await response.json()
      if (json.code !== 200 && json.code !== 0) {
        throw new Error(json.msg)
      }
      return json.data
    },
  },
})

export default http
