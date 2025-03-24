//  src/store/module/user.ts
import { defineStore } from "pinia";
import AuthAPI from "@/api/auth";
import UserAPI, { UserInfo } from "@/api/user";

export const useUserStore = defineStore("user", () => {
  // 确保 token 是响应式的
  const token = ref<string>(uni.getStorageSync("token") || "");
  const userInfo = ref<UserInfo | null>(null);

  // 登录
  const login = async (username: string, password: string) => {
    const { tokenType, accessToken } = await AuthAPI.login(username, password);
    token.value = `${tokenType} ${accessToken}`; // Bearer token
    uni.setStorageSync("token", token.value);
  };

  // 获取用户信息
  const getUserInfo = async () => {
    const info = await UserAPI.getUserInfo();
    userInfo.value = info;
  };

  // 登出
  const logout = async () => {
    await AuthAPI.logout();
    userInfo.value = null;
    token.value = ""; // 清空 token
    uni.removeStorageSync("token"); // 从本地缓存移除 token
  };

  return {
    token,
    userInfo,
    login,
    logout,
    getUserInfo,
  };
});
