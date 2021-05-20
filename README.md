# 爱速搭模板管理

基于 [amis](https://github.com/baidu/amis) 渲染器，快速搭建自己的管理系统。

## 快速开始

其实这个项目直接双击 `index.html` 都能看大部分效果，不过为了更完整体验，请运行下面的命令：

```bash
# 安装依赖
npm i

# 打开服务
npm start

```

## 添加模板

在 `pages` 目录下，添加一个文件夹，来放置模板的内容，一般需要包含以下文件：

- `schema.json`: 页面的 amis 配置
- `README.md`: 页面的描述文件，顶部用 yml 格式填写模板信息
- `xxx.api.js/xxx.api.json`: mock api 的文件，参考已有示例
- 其他静态资源文件

请不要引用外部资源，接口和其他静态文件都放在模板目录下面，资源引用请使用 `<template_path>` 作为前缀比如 `<template_path>/xxx.jpeg`

## 产出

运行 `npm run build` 会打包所有模板，你也可以单独打包特定模板

生成压缩包 `templates.zip` 后，在平台超管界面的页面模板内，导入该文件
