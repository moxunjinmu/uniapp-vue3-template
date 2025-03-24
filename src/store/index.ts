// src/store/index.ts
import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();
// 注册 Pinia
export function setupStore(app: App<Element>) {
  app.use(store); // 全局注册 Pinia
}
