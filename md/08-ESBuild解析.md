# ESBuild解析

- ESBuild的特点:
  + 超快的构建速度,并且不需要缓存
  + 支持ES6和CommonJS的模块化
  + 支持ES6的Tree Shaking
  + 支持Go,JavaScript的API
  + 支持TypeScript,JSX等语法编译
  + 支持SourceMap
  + 支持代码压缩
  + 支持扩展其他插件

> 相对于ESBuild代替了Babel

# ESBuild的构建速度

- ESBuild的构建速度和其他构建工具速度对比:

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96358aace26d4be4888f46556d8f7ad2~tplv-k3u1fbpfcp-watermark.image)

- ESBuild为什么那么快?
  + 使用Go语言编写的,可以直接转换成机器代码,而无需经过字节码
  + ESBuild可以充分利用CPU的多内核,尽可能让它们饱和运行
  + ESBuild的所有内容都是从零开始编写的,而不是使用第三方,所以从一开始就开始考虑各种性能问题
  + 等等...
  