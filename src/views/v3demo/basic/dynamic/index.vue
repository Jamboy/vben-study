<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-22 16:42:54
 * @LastEditTime: 2022-06-29 15:53:14
-->
<template>
  <div ref="bookRef">{{ state.count }} </div>
  <button @click="add">增加</button>
  <div>书籍标题：{{ newBook.title }}</div>
  <div>书籍year：{{ newBook.year }}</div>
  <div @click="onChange">深层响应式{{ deepObj.title.deepTitle }}</div>
  <div @click="refAdd">ref：{{ tempRefCount }}</div>
  <div @click="refAdd">ref自动解包：{{ foo + 1 }}</div>
  <div @click="refAddTemp">ref 在响应式对象中的解包: {{ tempRef5 }}</div>
  <div @click="refAddTemp1">ref 在响应式对象中的解包: {{ tempProp }}</div>
  <div>toRef 期望值 测试 :> {{ toRefName }}</div>
  <div>toRef userInfo.title 前 :> {{ userInfo.title }}</div>
  <div
    @click="
      {
        {
          toRefName = '修改';
        }
      }
    "
    >toRef 更改userInfo.title:></div
  >
</template>
<script lang="ts" setup>
  import { nextTick, reactive, ref, toRef, toRefs } from 'vue';
  import type { Ref } from 'vue';

  const state = reactive({ count: 0 });
  const bookRef = ref(null);

  const add = () => {
    state.count++;
    console.log('before', bookRef.value);
    nextTick(() => {
      console.log('after', bookRef.value);
    });
  };

  // 为reactive标注类型
  interface Book {
    title: string;
    year?: number;
  }
  const newBook: Book = reactive({ title: '测试' });

  // 深层响应式
  const deepObj = reactive({ title: { deepTitle: 1 }, arr: { deepArr: [1] } });

  const onChange = () => {
    deepObj.title.deepTitle++;
    deepObj.arr.deepArr.push(2);
    console.log('deepObj: ', deepObj.arr);
  };

  // ref() 定义响应式变量

  const tempRefCount = ref(0);

  const refAdd = () => {
    console.log('tempRefCount: ', tempRefCount);
    tempRefCount.value++;
  };
  // 为 ref() 标注类型

  const tempRef2: Ref<string | number> = ref(1);
  const tempRef3 = ref<string | number>(1);
  if (typeof tempRef3.value == 'string') {
    console.log('tempRef3: ', tempRef3.value.length);
  }
  console.log('tempRef2: ', tempRef2);
  // ref 在模板中的解包
  const tempRef4 = { foo: ref(1) };
  const { foo } = tempRef4;

  // ref 在响应式对象中的解包
  const tempProp = ref(1);
  const tempRef5 = reactive({
    tempProp,
  });

  const refAddTemp = () => {
    tempRef5.tempProp++;
  };

  const refAddTemp1 = () => {
    tempProp.value++;
  };
  // 数组和集合类型的 ref 解包
  const temp6 = reactive([ref(1)]);
  console.log('temp6: ', temp6[0].value);

  //响应式 API 之 toRef 与 toRefs
  interface Member {
    id: number;
    title: string;
  }
  const userInfo: Member = reactive({
    id: 1,
    title: '测试',
  });

  // toRef
  // toRef 接收 2 个参数，第一个是 reactive 对象, 第二个是要转换的 key 。
  const toRefName = toRef(userInfo, 'title');
  // toRef 一个不存在的值，期望undefined ts 校验不通过
  const toRefNotExist = toRef(userInfo, 'id');
  console.log('toRefNotExist: ', toRefNotExist);
  // toRefs toRefs 接收 1 个参数，是一个 reactive 对象。
  const toRefsUserInfo = toRefs(userInfo);
  console.log('toRefsUserInfo: ', toRefsUserInfo);
  toRefsUserInfo.title.value = '修改1';
  const { id, title } = toRefsUserInfo;
  console.log('title: ', title.value);
  console.log('id: ', id.value);
  id.value = 12312;
  console.log('id: ', id.value);
  console.log('userInfo: ', userInfo.id);
</script>
<style lang="less" scoped></style>
