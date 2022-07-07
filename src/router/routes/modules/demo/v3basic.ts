/*
 * @Description: vue3 基础知识点路由配置 https://staging-cn.vuejs.org/guide/introduction.html

 * @Author: Jamboy
 * @Date: 2022-06-21 15:03:02
 * @LastEditTime: 2022-06-30 11:05:25
 */
import type { AppRouteModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';

const vBasic: AppRouteModule = {
  path: '/v3basic', // router path
  name: 'V3Basic', // router name
  component: LAYOUT,
  redirect: '/v3basic/dynamic',
  meta: {
    orderNo: 0,
    icon: 'ion:layers-outline',
    title: t('routes.demo.v3basic.basic'),
  },
  // 二级路由
  children: [
    {
      path: '/v3basic/dynamic',
      name: 'V3BasicDynamic',
      component: () => import('/@/views/v3demo/basic/dynamic/index.vue'), // 动态加载组件
      meta: {
        title: t('routes.demo.v3basic.dynamic'),
      },
    },
    {
      path: '/v3basic/computed',
      name: 'V3BasicComputed',
      component: () => import('/@/views/v3demo/basic/computed/index.vue'),
      meta: {
        title: t('routes.demo.v3basic.computed'),
      },
    },
    {
      path: '/v3basic/watch',
      name: 'V3BasicWatch',
      component: () => import('/@/views/v3demo/basic/watch/index.vue'),
      meta: {
        title: t('routes.demo.v3basic.watch'),
      },
    },
    {
      path: '/v3basic/directive',
      name: 'V3BasicDirective',
      component: () => import('/@/views/v3demo/basic/directive/index.vue'),
      meta: {
        title: t('routes.demo.v3basic.directive'),
      },
    },
  ],
};

export default vBasic;
