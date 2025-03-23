// src/utils/request.ts
export default function request<T>(options: UniApp.RequestOptions): Promise<T> {
  const token = uni.getStorageSync("token"); // 从本地缓存获取 token

  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      // VITE_APP_API_URL 是在 Vite 项目的 .env.development 文件中配置的环境变量，表示 API 的路径
      url: `${import.meta.env.VITE_APP_API_URL}${options.url}`,
      header: {
        ...options.header,
        Authorization: token,
      },
      success: (response) => {
        const resData = response.data as ResponseData<T>;
        // 业务状态码 00000 表示成功
        if (resData.code === "00000") {
          resolve(resData.data);
        } else {
          uni.showToast({
            title: resData.msg || "业务处理失败",
            icon: "none",
            duration: 2000,
          });
          reject({
            message: resData.msg || "业务处理失败",
            code: resData.code,
          });
        }
      },
      fail: (error) => {
        uni.showToast({
          title: "网络请求失败",
          icon: "none",
          duration: 2000,
        });
        reject({
          message: "网络请求失败",
          error,
        });
      },
    });
  });
}
