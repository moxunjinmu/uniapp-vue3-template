<!--
 * @Author: moxunjingmu
 * @Date: 2025-03-24 17:39:53
 * @Description:
-->
<template>
  <view class="flex flex-col items-center justify-center p-30rpx">
    <image class="h-200rpx w-200rpx mt-100rpx mx-auto mb-50rpx" src="/static/logo.png" />
    <view class="flex justify-center mb-80rpx">
      <text class="text-36rpx text-gray-500">{{ title }}</text>
    </view>
    <view>
      <wd-button size="small">主要按钮</wd-button>
      <wd-button type="success" size="small">成功按钮</wd-button>
      <wd-button type="info" size="small">信息按钮</wd-button>
      <wd-button type="warning" size="small">警告按钮</wd-button>
      <wd-button type="error" size="small">危险按钮</wd-button>
    </view>
    <view class="w-full flex flex-col items-center">
      <text class="text-32rpx font-bold text-gray-800 mb-10rpx">每日心情记录</text>
      <text class="text-24rpx text-gray-500 mb-30rpx">追踪你的情绪变化，培养积极心态</text>
      <MoodTracker></MoodTracker>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("UniApp 模板应用");
</script>
