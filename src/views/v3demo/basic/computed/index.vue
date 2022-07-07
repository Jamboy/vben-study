<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-21 15:47:22
 * @LastEditTime: 2022-06-29 16:24:50
-->
<template>
  <div>
    <input type="text" v-model="tagsStr" />
    {{ tags }}
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const tags = ref<string[]>([]);
  const tagsStr = computed({
    get() {
      return tags.value.join(',');
    },
    set(newStr: string) {
      tags.value = newStr.split(',');
    },
  });
</script>
<style lang="less" scoped></style>
