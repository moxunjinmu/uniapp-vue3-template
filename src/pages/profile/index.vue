<template>
  <view class="flex-center flex-col">
    <text class="text-blue font-bold text-lg">我的</text>

    <!-- 判断是否已登录 -->
    <template v-if="isLoggedIn">
      <image :src="userInfo?.avatar" class="w100 h100 mb-5 rounded-full" />
      <text class="text-lg font-bold">{{ userInfo?.nickname }}</text>
      <button @click="handleLogout" class="mt-5">退出登录</button>
    </template>

    <!-- 未登录时显示去登录按钮 -->
    <template v-else>
      <text>您还未登录，请先登录</text>
      <button @click="goToLoginPage" class="mt-5">去登录</button>
    </template>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";

// 使用 pinia
const userStore = useUserStore();

const isLoggedIn = computed(() => userStore.token);
const userInfo = computed(() => userStore.userInfo);

// 跳转到登录页面
const goToLoginPage = () => {
  uni.navigateTo({ url: "/pages/login/index" });
};

// 退出登录处理
const handleLogout = async () => {
  await userStore.logout();
  uni.showToast({ title: "已退出登录", icon: "success" });
};
</script>
