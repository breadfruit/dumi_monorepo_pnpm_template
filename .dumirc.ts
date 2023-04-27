import { defineConfig } from 'dumi';
import path from 'path'

export default defineConfig({
  outputPath: 'doc-public',
  base: '/good',
  publicPath: '/publish/',
  locales: [{ id: 'zh-CN', name: '中文' }],
  themeConfig: {
    name: 'dumi',
    nav: [
      {
        title: '组件',
        link: '/components',
      },
      {
        title: '业务hook',
        link: '/hooks',
      },
      {
        title: '函数',
        link: '/pro1s',
      }, 
      {
        title: '帮助',
        link: '/helps',
      }, 
    ],
  },
  alias: {
    "pro1": path.resolve(__dirname, 'packages/pro1/src/index.ts'),
    "pro2": path.resolve(__dirname, 'packages/pro2/src/index.ts'),
    "pro3": path.resolve(__dirname, 'packages/pro3/src/index.ts'),
  },
  resolve: {
    atomDirs: [
      {
        type: 'pro1',
        dir: 'packages/pro1/src'
      },
      {
        type: 'components',
        dir: 'packages/pro2/src/components'
      },
      {
        type: 'hooks',
        dir: 'packages/pro2/src/hooks'
      },
      {
        type: 'help',
        dir: 'packages/pro3/src'
      }
    ]
  }
});
