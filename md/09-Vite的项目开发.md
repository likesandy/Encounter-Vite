# Vite的项目开发

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c59f2e75b274811be7798e849fa4ba0~tplv-k3u1fbpfcp-watermark.image)

- 可以使用官方的指令
  + 当然官方的这个指令是一个语法糖
  + 这里拿npm的指令来进行讲解
  ``
  npm init @vitejs/app = npm install @vitejs/create-app
  ``
  + 其实这个是关于npm的小知识
  + 所以我们真正使用的包是@vitejs/create-app[地址](https://www.npmjs.com/package/@vitejs/create-app)
  + 所以也可以
  ``
  npm install @vitejs/create-app -g
  ``
  + 然后通过create-app来搭建项目