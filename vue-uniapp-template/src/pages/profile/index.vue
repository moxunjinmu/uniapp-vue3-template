<template>
  <view class="flex-center flex-col">
    <view>
      <text class="text-blue font-bold text-lg">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref("我的");

onMounted(() => {
  console.log("onMounted");
  console.log(import.meta.env.VITE_APP_PORT);
});
</script>
