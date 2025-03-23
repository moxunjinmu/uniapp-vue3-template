// src/types/global.d.ts
declare global {
  /**
   * 响应数据结构
   */
  interface ResponseData<T = any> {
    code: string; // 业务状态码
    data: T; // 返回数据
    msg: string; // 消息
  }
}
export {};
