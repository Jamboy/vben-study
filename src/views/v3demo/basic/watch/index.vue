<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-29 16:41:17
 * @LastEditTime: 2022-06-29 17:36:32
-->
<template>
  <div> 监听 </div>
</template>
<script lang="ts" setup>
  import { reactive, ref, watch, watchEffect } from 'vue';
  const userInfo = reactive({
    title: '旧数据',
    age: 0,
  });
  const index = ref<number>(0);

  setTimeout(() => {
    userInfo.title = '修改';
    index.value++;
  }, 2000);

  const handleWatch = (newValue: number | string, oldValue: number | string): void => {
    console.log('newValue123123: ', newValue);
    console.log('oldValue31231: ', oldValue);
  };

  watch(() => userInfo.title, handleWatch);
  watch(index, handleWatch);

  // 直接监听这个响应式对象
  watch(userInfo, () => {
    console.log('userInfo: ', userInfo.title);
  });

  // 监听响应式对象的属性
  watch(
    () => userInfo.title,
    (newValue, oldValue) => {
      console.log('newValue: ', newValue);
      console.log('oldValue: ', oldValue);
    },
  );

  // 批量监听
  watch([() => userInfo.title, index], ([newUser, oldUser], [newIndex, oldIndex]) => {
    console.log('oldIndex水电费: ', oldIndex);
    console.log('newIndexIndex水电费: ', newIndex);
    console.log('oldUser:Index水电费 ', oldUser);
    console.log('newUser: Index水电费', newUser);
  });

  watchEffect;
</script>
<style lang="less" scoped></style>
