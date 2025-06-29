/*
 * 🔧 Vite 构建工具配置文件
 * ====================================
 *
 * 📝 什么是 Vite？
 * Vite 是一个现代的前端构建工具,就像一个超级厨师帮你把原材料(代码)
 * 加工成美味的菜肴(可以在浏览器中运行的网页)
 *
 * 🚀 Vite 的特点：
 * - 启动速度超快(像闪电一样!)
 * - 热更新(代码改了立刻看到效果,不用刷新页面)
 * - 现代化的构建流程
 *
 * 📖 这个文件的作用：
 * 告诉 Vite 如何处理我们的项目,就像给厨师一份详细的食谱
 */

// 🔍 导入 Vite 的核心配置函数
// defineConfig 就像一个配置助手,帮我们正确设置各种选项
import { defineConfig } from 'vite';

// 🎯 导入 React 插件
// 这个插件让 Vite 知道如何处理 React 代码(.jsx 文件)
// 就像给翻译官一本词典,让他知道如何翻译 React 语言
import react from '@vitejs/plugin-react';

// 🔍 导入 ESLint 插件
// ESLint 是代码质量检查工具,就像老师检查作业一样
// 它会告诉我们哪里写错了,哪里可以写得更好
import eslint from 'vite-plugin-eslint';

// 📚 官方配置文档链接
// 如果想了解更多配置选项,可以查看: https://vitejs.dev/config/

/*
 * 🏗️ 导出默认配置
 * ================
 *
 * defineConfig() 函数接收一个配置对象,就像填写一张表格
 * 这张表格告诉 Vite 应该如何工作
 */
export default defineConfig({
  /*
   * 🔌 插件配置数组
   * ===============
   *
   * plugins 就像给 Vite 安装各种功能模块,每个插件负责不同的任务:
   *
   * 1. react() - React 处理插件
   *    - 把 JSX 语法转换成浏览器能理解的 JavaScript
   *    - 启用 React 热更新功能
   *    - 处理 React 组件的导入和导出
   *
   * 2. eslint() - 代码质量检查插件
   *    - 在开发时实时检查代码质量
   *    - 发现潜在的错误和问题
   *    - 确保代码符合最佳实践
   *
   * 💡 类比理解：
   * 如果 Vite 是一台洗衣机,那么插件就是不同的洗涤程序:
   * - react() 是"精细洗涤"程序,专门处理 React 代码
   * - eslint() 是"质量检测"程序,确保代码质量过关
   */
  plugins: [react(), eslint()],

  /*
   * 🎯 未来可能的配置扩展：
   * ========================
   *
   * 随着项目发展,我们可能会添加更多配置,比如:
   *
   * server: {
   *   port: 3000,        // 指定开发服务器端口
   *   open: true,        // 启动时自动打开浏览器
   * },
   *
   * build: {
   *   outDir: 'dist',    // 构建输出目录
   *   sourcemap: true,   // 生成源码映射文件
   * },
   *
   * define: {
   *   __APP_VERSION__: JSON.stringify('1.0.0'), // 定义全局常量
   * }
   */
});

/*
 * 🎓 学习要点总结：
 * ================
 *
 * 1. 配置文件是项目的"说明书",告诉工具如何工作
 * 2. 插件系统让我们可以轻松添加各种功能
 * 3. Vite 的配置相对简单,但功能强大
 * 4. 每个插件都有特定的职责和作用
 * 5. 配置可以随着项目需求不断扩展和调整
 *
 * 🔗 相关学习资源：
 * - Vite 官方文档: https://vitejs.dev/
 * - React 插件文档: https://github.com/vitejs/vite-plugin-react
 * - ESLint 配置指南: https://eslint.org/docs/user-guide/configuring/
 */
