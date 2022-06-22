/*
 * @Description: vue3 基础知识点路由配置 https://staging-cn.vuejs.org/guide/introduction.html

 * @Author: Jamboy
 * @Date: 2022-06-21 15:03:02
 * @LastEditTime: 2022-06-21 15:47:27
 */
import type { AppRouteModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';

const vBasic: AppRouteModule = {
  path: '/v3basic',
  name: 'V3Basic',
  component: LAYOUT,
  redirect: '/v3basic/dynamic',
  meta: {
    orderNo: 0,
    icon: 'ion:layers-outline',
    title: t('routes.demo.v3basic.basic'),
  },
  children: [
    {
      path: '/v3basic/dynamic',
      name: 'V3BasicDynamic',
      component: () => import('/@/views/v3demo/basic/dynamic/index.vue'),
      meta: {
        title: t('routes.demo.v3basic.dynamic'),
      },
    },
  ],
};

export default vBasic;
