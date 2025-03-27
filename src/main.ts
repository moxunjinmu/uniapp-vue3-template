import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
import { setupStore } from "@/store";
export function createApp() {
  const app = createSSRApp(App);
  // 全局注册 store
  setupStore(app);
  return {
    app,
  };
}
