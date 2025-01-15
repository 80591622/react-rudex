import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log(__dirname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 @ 指向 src 文件夹
      '~utils': path.resolve(__dirname, 'src/utils'), // 示例：自定义别名
      '~hooks': path.resolve(__dirname, 'src/hooks'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  build: {
    outDir: 'build', // 设置打包输出目录为 build
    assetsDir: 'static', // 设置静态资源目录名（默认是 assets）
    sourcemap: false, // 是否生成 source map 文件
    minify: 'terser', // 代码压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console.log
        // drop_debugger: true, // 移除 debugger
      },
    },
    rollupOptions: {
      output: {
        // 可以自定义文件名规则
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'static/[ext]/[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000, // 可以设置 Vite 开发服务器的端口号
  },
  
});