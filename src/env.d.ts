/*
 * @Author: moxunjinmu
 * @Date: 2025-03-24 17:39:53
 * @Description:
 */
/// <reference types="vite/client" />
declare module "uview-plus";
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
