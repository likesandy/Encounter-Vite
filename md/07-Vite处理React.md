# Vite支持React

- 首先当然需要安装插件
``
npm i react react-dom
``

- Vite对TypeScript是原生支持的,因为它的ESbuild支持jsx语法
  + 只需要直接导入就可以了

- 但是这里它报错了,这不是我们的代码写错了

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f956833a7954a3ea545190da875830f~tplv-k3u1fbpfcp-watermark.image)

  + 是因为它是支持jsx的语法
  + 所以代码是没有任何问题的
  + 但是这里报错是因为我们这个文件是js的文件
  + js的文件里是不能写jsx的语法的
  + 所以这里是会报错的
  + 只需要把我们的文件改为jsx和入口改为jsx就可以了