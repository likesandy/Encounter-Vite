# Vite的安装

- 官方的说法是直接通过npm或者yarn搭建项目(这类似于脚手架)

- 我们当前就有一个项目,而且是学习阶段这里就不适用脚手架进行搭建

- 直接通过
``
npm install vite -D
``
来进行安装

# BUG

- 在代码中对Vite进行的简单的演练

- 但是在运行的时候就产生了一个错误

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dcbf533c34242759a43320ae8ecaeeb~tplv-k3u1fbpfcp-watermark.image)

- 我在网上查阅了大量的资料,终于查找到了解决的方法

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/528e4e13af734a89935bc7c08c8e4738~tplv-k3u1fbpfcp-watermark.image)

- 解决方法: 手动运行
``
node node_modules/esbuild/install.js
``
就可以解决esbuild安装问题

- 之后再启动项目就可以了

> 资料转载于[https://blog.csdn.net/m0_37682004/article/details/115001613](https://blog.csdn.net/m0_37682004/article/details/115001613)