<template>
  <view class="flex-col">
    <input v-model="username" placeholder="请输入用户名" />
    <input v-model="password" placeholder="请输入密码" type="password" />
    <button @click="handleLogin">登录</button>
  </view>
</template>

<script lang="ts" setup>
import AuthAPI, { LoginResult } from "@/api/auth";

const username = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response: LoginResult = await AuthAPI.login(username.value, password.value);
    if (response.accessToken) {
      uni.setStorageSync("token", response.accessToken);
      uni.showToast({ title: "登录成功", icon: "success" });
    } else {
      uni.showToast({ title: "登录失败", icon: "none" });
    }
  } catch (err) {
    uni.showToast({ title: "登录失败", icon: "none" });
    console.log("err", err);
  }
};
</script>

<style scoped></style>
