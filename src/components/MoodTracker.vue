<template>
  <view class="p-30rpx bg-white rounded-16rpx shadow-sm m-20rpx">
    <text class="text-36rpx font-bold text-center block mb-30rpx text-gray-800">今天的心情如何？</text>
    <view class="flex justify-around flex-wrap mb-40rpx">
      <view
        v-for="(mood, index) in moods"
        :key="index"
        class="flex flex-col items-center p-20rpx rounded-12rpx transition-all duration-300 w-120rpx"
        :class="selectedMood === index ? 'transform scale-110 bg-gray-100 shadow-xs' : ''"
        @click="selectMood(index)">
        <text class="text-50rpx mb-10rpx">{{ mood.emoji }}</text>
        <text class="text-24rpx text-gray-500">{{ mood.label }}</text>
      </view>
    </view>
    <view v-if="selectedMood !== null" class="bg-gray-50 p-20rpx rounded-12rpx mb-30rpx flex flex-col items-center">
      <text class="text-28rpx text-gray-800 mb-20rpx text-center">{{ getMoodMessage() }}</text>
      <view class="h-60rpx w-60rpx rounded-full my-20rpx" :class="getAnimationClass()"></view>
    </view>
    <button
      class="w-full py-20rpx px-40rpx text-28rpx rounded-10rpx mt-20rpx text-white"
      :class="selectedMood === null ? 'bg-gray-400 text-gray-600' : 'bg-blue-500'"
      @click="saveMood"
      :disabled="selectedMood === null">
      记录心情
    </button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const moods = [
  { emoji: "😊", label: "开心", color: "#FFD700", message: "阳光般灿烂的一天！" },
  { emoji: "😌", label: "平静", color: "#87CEEB", message: "平静安详的心情" },
  { emoji: "😔", label: "低落", color: "#6A5ACD", message: "每个人都会有不开心的时候" },
  { emoji: "😡", label: "生气", color: "#FF6347", message: "深呼吸，放松一下" },
  { emoji: "🤔", label: "思考", color: "#9370DB", message: "思考使人进步" },
];

const selectedMood = ref<number | null>(null);

const selectMood = (index: number) => {
  selectedMood.value = index;
};

const getMoodMessage = () => {
  if (selectedMood.value !== null) {
    return moods[selectedMood.value].message;
  }
  return "";
};

const getAnimationClass = () => {
  if (selectedMood.value === null) return "";

  const moodIndex = selectedMood.value;
  switch (moodIndex) {
    case 0:
      return "happy-animation bg-yellow-400";
    case 1:
      return "calm-animation bg-blue-200";
    case 2:
      return "sad-animation bg-indigo-500";
    case 3:
      return "angry-animation bg-red-400";
    case 4:
      return "thinking-animation bg-purple-400";
    default:
      return "";
  }
};

const saveMood = () => {
  if (selectedMood.value !== null) {
    uni.showToast({
      title: `已记录今日心情：${moods[selectedMood.value].label}`,
      icon: "success",
    });

    // 这里可以添加保存数据的逻辑
    // 例如：保存到本地存储或发送到服务器
  }
};
</script>

<style>
/* 保留必要的动画关键帧 */
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10rpx);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes shrink {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5rpx);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(5rpx);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 应用动画 */
.happy-animation {
  animation: pulse 1.5s infinite;
}

.calm-animation {
  animation: float 3s infinite;
}

.sad-animation {
  animation: shrink 2s infinite;
}

.angry-animation {
  animation: shake 0.5s infinite;
}

.thinking-animation {
  animation: rotate 3s infinite;
}
</style>
