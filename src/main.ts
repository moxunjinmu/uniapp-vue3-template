/*
 * @Author: moxunjinmu
 * @Date: 2025-03-24 17:39:53
 * @Description:
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
import { setupStore } from "@/store";
import uViewPlus from "uview-plus";

export function createApp() {
  const app = createSSRApp(App);
  // 全局注册 store
  setupStore(app);
  app.use(uViewPlus);
  return {
    app,
  };
}
