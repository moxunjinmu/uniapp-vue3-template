import globals from "globals"; // 全局变量配置
import pluginJs from "@eslint/js"; // JavaScript 的推荐配置
import tseslint from "typescript-eslint"; // TypeScript 配置
import pluginVue from "eslint-plugin-vue"; // Vue 配置
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// 动态读取 .eslintrc-auto-import.json 文件内容
const autoImportConfig = JSON.parse(
  readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), ".eslintrc-auto-import.json"),
    "utf-8",
  ),
);

export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]}, // 校验的文件类型
  {
    languageOptions: {
      globals: {
        ...globals.browser ,
        ...globals.node,
        ...autoImportConfig.globals, // 自动导入的全局变量
        ...{
          uni: "readonly", // uni-app 全局对象
        },
      }
    }
  }, // 浏览器/Node环境全局变量
  pluginJs.configs.recommended, // JavaScript 推荐配置
  ...tseslint.configs.recommended, // TypeScript 推荐配置
  ...pluginVue.configs["flat/essential"], // Vue 推荐配置
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } }, // 对 .vue 文件使用 TypeScript 解析器
  
  // 添加忽略的文件或目录
  {
    ignores: [
      "/dist",
      "/public",
      "/node_modules",
      "**/*.min.js",
      "**/*.config.mjs",
      "**/*.tsbuildinfo",
      "/src/manifest.json",
    ]
  },

  // 自定义规则
  {
    rules: {
      quotes: ["error", "double"], // 强制使用双引号
      "quote-props": ["error", "as-needed"], // 强制对象的属性名使用引号
      semi: ["error", "always"], // 要求使用分号
      indent: ["error", 2], // 使用两个空格进行缩进
      "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
      "no-trailing-spaces": "error", // 不允许行尾有空格
      // 精细化控制：允许双否，但禁止其他冗余转换（如 Boolean(variable)）
      "no-extra-boolean-cast": ["error", { 
        "allowWithTernary": true,   // 允许在条件表达式中使用双否
        "enforceForLogicalOperands": false // 不检查逻辑操作符中的布尔转换
      }],

      // TypeScript 规则
      "@typescript-eslint/no-explicit-any": "off", // 禁用 no-explicit-any 规则，允许使用 any 类型
      "@typescript-eslint/no-empty-function": "off", // 允许空函数
      "@typescript-eslint/explicit-function-return-type": "off", // 不强制要求函数必须明确返回类型
      "@typescript-eslint/no-empty-interface": "off", // 禁用 no-empty-interface 规则，允许空接口声明
      "@typescript-eslint/no-empty-object-type": "off", // 允许空对象类型

      // Vue 规则
      "vue/multi-word-component-names": "off", // 关闭多单词组件名称的限制
      "vue/html-indent": ["error", 2], // Vue 模板中的 HTML 缩进使用两个空格
      "vue/no-v-html": "off", // 允许使用 v-html (根据实际项目需要)
      'vue/quote-props': ['error', 'as-needed'] // 
    },
  },
];
