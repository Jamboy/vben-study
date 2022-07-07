<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-30 10:58:52
 * @LastEditTime: 2022-06-30 14:40:18
-->
<template>
  <div> 指令 </div>
  <div v-for="(item, index) in 3" :key="index">{{ item + index }}</div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped></style>
