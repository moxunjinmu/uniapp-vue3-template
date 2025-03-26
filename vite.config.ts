/*
 * @Author: moxunjinmu
 * @Date: 2025-03-24 17:38:39
 * @Description:
 */
import { defineConfig, UserConfig, ConfigEnv, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const UnoCss = await import("unocss/vite").then((i) => i.default);
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: "0.0.0.0",
      port: +env.VITE_APP_PORT,
      open: true,
      // 反向代理配置
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_API_URL, // 目标服务器
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""), // 去掉前缀
        },
      },
    },
    plugins: [
      uni(),
      // 配置 UnoCSS
      UnoCss(),
      AutoImport({
        imports: ["vue", "uni-app"], // 自动导入 Vue 和 UniApp 的 API
        dts: "src/types/auto-imports.d.ts", // 自动生成类型声明文件
        eslintrc: {
          enabled: true, // 生成 ESLint 配置文件
          filepath: "./.eslintrc-auto-import.json", // ESLint 配置文件路径
        },
      }),
    ],
  };
});
