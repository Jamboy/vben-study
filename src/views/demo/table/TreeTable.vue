<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-23 14:24:20
 * @LastEditTime: 2022-06-23 14:36:55
-->
<template>
  <div class="p-4">
    <BasicTable @register="register">
      <template #toolbar>
        <a-button type="primary" @click="expandAll">展开全部</a-button>
        <a-button type="primary" @click="collapseAll">折叠全部</a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { getBasicColumns, getTreeTableData } from './tableData';
  import { BasicTable, useTable } from '/@/components/Table';

  const [register, { expandAll, collapseAll }] = useTable({
    title: 'Tree Table',
    isTreeTable: true,
    rowSelection: {
      type: 'checkbox',
      getCheckboxProps(record: Recordable) {
        console.log('record: ', record);
        // Demo: 第一行（id为0）的选择框禁用
        if (record.id === '0') {
          return { disabled: true };
        } else {
          return { disabled: false };
        }
      },
    },
    columns: getBasicColumns(),
    dataSource: getTreeTableData(),
    rowKey: 'id',
  });
</script>
<style lang="less" scoped></style>
