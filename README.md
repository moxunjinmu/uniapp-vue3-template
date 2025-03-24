# UniApp Vue3 Template

一个基于 Vue 3 + TypeScript + Vite + UnoCSS 的 uni-app 项目模板，集成了多种实用工具和最佳实践，适用于快速开发跨平台应用。

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg) ![Vite](https://img.shields.io/badge/Vite-4.x-646cff.svg) ![uni-app](https://img.shields.io/badge/uni--app-3.x-green.svg) ![UnoCSS](https://img.shields.io/badge/UnoCSS-latest-8D66FE.svg) ![Pinia](https://img.shields.io/badge/Pinia-latest-yellow.svg) ![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3.svg) ![Prettier](https://img.shields.io/badge/Prettier-3.x-F7B93E.svg) ![Sass](https://img.shields.io/badge/Sass-latest-CC6699.svg)

## 特性

- 🚀 Vue 3 + TypeScript + Vite + UnoCSS 技术栈
- 📱 支持多端开发（小程序、H5、APP）
- 🧰 完整的代码规范与提交规范
- 🔍 ESLint + Prettier 代码质量控制
- 🔄 Git Hooks 自动化工作流
- 📦 Pinia 状态管理
- 🛠️ 请求封装和拦截器
- 🧩 自动导入 API 和组件
- 🎨 集成 UnoCSS 原子化 CSS 框架

## 环境要求

- Node.js (推荐使用 nvm 管理 Node 版本)
- VSCode 或 Cursor 编辑器
- Vue CLI

## 快速开始

### 克隆项目

```bash
git clone https://gitee.com/your-username/uniapp-vue3-template.git
cd uniapp-vue3-template
```

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn
```

### 启动开发服务器

```bash
# 开发 H5
pnpm dev:h5

# 开发微信小程序
pnpm dev:mp-weixin

# 开发支付宝小程序
pnpm dev:mp-alipay

# 更多平台请参考 package.json 中的 scripts
```

### 构建生产版本

```bash
# 构建 H5
pnpm build:h5

# 构建微信小程序
pnpm build:mp-weixin

# 构建支付宝小程序
pnpm build:mp-alipay

# 更多平台请参考 package.json 中的 scripts
```

## 项目结构

```plaintext
uniapp-vue3-template/
├── src/                     # 源代码
│   ├── api/                 # API 接口目录
│   ├── components/          # 公共组件
│   ├── composables/         # 组合式函数
│   ├── pages/               # 页面
│   ├── static/              # 静态资源
│   │   └── tabbar/          # Tabbar 图标
│   ├── stores/              # Pinia 状态管理
│   ├── styles/              # 全局样式
│   ├── utils/               # 工具函数
│   ├── App.vue              # 应用入口组件
│   ├── main.ts              # 主入口文件
│   ├── manifest.json        # 应用配置文件
│   ├── pages.json           # 页面配置文件
│   └── uni.scss             # uni-app 样式变量
├── eslint.config.mjs        # ESLint 配置
├── tsconfig.json            # TypeScript 配置
├── uno.config.ts            # UnoCSS 配置
├── vite.config.ts           # Vite 配置
└── package.json             # 依赖和脚本
```

## 代码规范

项目集成了 ESLint 和 Prettier 进行代码质量控制和格式化。

### ESLint 配置

ESLint 配置位于 `eslint.config.mjs` 文件，针对 JavaScript、TypeScript 和 Vue 文件提供了代码规范检查。

```bash
# 运行 ESLint 检查并修复
pnpm lint
```

### 提交规范

项目使用 commitlint 强制实施 Git 提交消息规范：

- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档变更
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改 bug 的代码变动）
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退
- `build`: 打包

提交示例：

```bash
git commit -m "feat: 添加用户登录功能"
```

## UnoCSS 集成

项目集成了 UnoCSS 提供原子化 CSS 解决方案：

```html
<!-- 示例用法 -->
<view class="flex justify-center items-center p-4 bg-blue-500 text-white">UnoCSS 示例</view>
```

## Pinia 状态管理

项目使用 Pinia 进行状态管理，示例文件位于 `src/stores/` 目录下。

```typescript
// 使用 store
const userStore = useUserStore();
```

## HTTP 请求封装

项目对 uni.request 进行了封装，提供了拦截器和统一的错误处理：

```typescript
// 示例用法
import { request } from "@/utils/request";

const data = await request<ResponseType>({
  url: "/api/endpoint",
  method: "GET",
});
```

## 自动导入

项目配置了 unplugin-auto-import 和 unplugin-vue-components 实现 API 和组件的自动导入：

- Vue API 自动导入
- Vue 组件自动导入
- uni-app API 自动导入
- Pinia API 自动导入

## 组件使用

项目配置了 easycom，可以直接使用 `components` 目录下的组件，无需手动导入：

```html
<!-- 示例用法，无需导入 -->
<custom-component></custom-component>
```

## 许可证

[MIT](LICENSE)
