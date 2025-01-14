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
  },
});