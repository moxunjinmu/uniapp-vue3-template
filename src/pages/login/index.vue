<template>
  <view class="flex-col items-center">
    <input v-model="username" placeholder="请输入用户名" />
    <input v-model="password" placeholder="请输入密码" type="password" />
    <button class="mt-5" @click="handleLogin">登录</button>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";

// 登录表单
const username = ref("admin");
const password = ref("123456");

// 使用 pinia
const userStore = useUserStore();

// 登录处理
const handleLogin = async () => {
  await userStore.login(username.value, password.value);

  if (userStore.token) {
    await userStore.getUserInfo(); // 登录成功后获取用户信息
    uni.showToast({ title: "登录成功", icon: "success" });
    uni.navigateBack(); // 登录成功后返回上一页
  } else {
    uni.showToast({ title: "登录失败", icon: "none" });
  }
};
</script>

<style scoped>
input {
  width: 80%;
  padding: 10px;
  margin-top: 16px;
  border: 1px solid #ccc;
}
</style>
