export const openaiError: Record<string, string> = {
  context_length_exceeded: '内容超长了，请重置对话',
  Unauthorized: 'API-KEY 不合法',
  rate_limit_reached: 'API被限制，请稍后再试',
  'Bad Request': 'Bad Request~ 可能内容太多了',
  'Too Many Requests': '请求次数太多了，请慢点~',
  'Bad Gateway': '网关异常，请重试'
};
export const openaiError2: Record<string, string> = {
  insufficient_quota: 'API 余额不足',
  invalid_request_error: '输入参数异常'
};
export const proxyError: Record<string, boolean> = {
  ECONNABORTED: true,
  ECONNRESET: true
};
