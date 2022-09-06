<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ state.title }}</text>
    </view>
    <uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
      <button type="default">右下</button>
    </uni-badge>
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="purple"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import UniBadge from '../../components/uni_ui/uni-badge/uni-badge.vue'

const state = reactive({
  title: '1'
})

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #666666;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
