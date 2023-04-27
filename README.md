# 开始

技术栈：dumi2.x + lerna6.x + monorepo + ts + pnpm

## 初始化项目

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed261987-9a4d-4883-8c0b-ae16ec92ba7e/Untitled.png)

```jsx
# 通过官方工具创建项目，选择你需要的模板
$ npx create-dumi
$ npx lerna@latest init
```

## 配置lerna.json

```jsx
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useWorkspaces": true,
  "npmClient": "pnpm",
  "version": "independent",
  "command": {
    "version": {
      "conventionalCommits": true,
      "changelogPreset": {
        "name": "conventional-changelog-conventionalcommits",
        "issuePrefixes": [
          "#"
        ]
      }
    }
  }
}
```

## 配置根目录下的package.json

⚠️发布的是packages下的子包，根目录下面不发，所以必须设置为private

```jsx
{
  "name": "root",
  "private": true,
  "workspaces": ["packages/*"],
  "devDependencies": {
    "lerna": "6.0.1"
  }
}

```

## 添加子项目(ts)

```jsx
npx lerna create pro2  --dependencies typescript --yes
```

## 设置别名

根目录tsconfig.base.json

```json
{
  "paths": {
      "@@/*": [
        ".dumi/tmp/*"
      ],
      "pro1": [
        "packages/pro1/src/index.ts"
      ],
      "pro2": [
        "packages/pro2/src/index.ts"
      ]
    }
}
```

dumi配置文件.dumirc.ts

```json
{
  "alias": {
    "pro1": path.resolve(__dirname, 'packages/pro1/src/index.ts'),
    "pro2": path.resolve(__dirname, 'packages/pro1/src/index.ts'),
  }
}
```

## 配置dumi在monorepo模式下的路由

```tsx
import { defineConfig } from 'dumi';

export default defineConfig({
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
      }
    ],
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
      }
    ]
  }
});
```

### SAQ

如果src下面没有文件夹，路由需要加s

link填的是atomDirs配置的type，且路由需要加s，/pro1s

```yaml
---
title: 函数集合
link: pro1
---
```

# 本地开发

```bash
# install dependencies
$ pnpm install

# start dev server
$ pnpm start

# build docs
$ pnpm run build
```
