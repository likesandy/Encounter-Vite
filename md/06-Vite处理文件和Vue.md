# Vite处理图片

- Vite对TypeScript是原生支持的,它会直接使用ESBuild来完成编译
  + 只需要直接导入就可以了

# Vite处理Vue

- Vite 为 Vue 提供第一优先级支持：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3121be9d7e2943f9867849630153904c~tplv-k3u1fbpfcp-watermark.image)

- 使用Vue首先要安装Vue
``
npm i vue
``
接着再根据自己vue的版本安装对应的插件,这里我的vue是2的版本,所以就安装2的插件
``
npm i vite-plugin-vue2 -D
``

- 接下来安装好了之后需要单独在根目录创建一个vite.config.js文件进行导入插件,导入完成以后就没有任何问题了

- 小知识:Vite运行为什么那么快的其中一个原因
  + 当我们第一次用vite开启服务的时候
  + 终端有会一个提示Pre-bundling dependencies
  + 因为一般我们package.json文件中的内容都不会进行调整
  + vite在第一次构建的时候会把我们的依赖关系进行一次预打包
  + 打包其实放在我们的包里vite文件夹下了
  + 之后我们下次构建服务的时候,之前已经打包过了,就不需要打包了
  + 所以之后打包的速度就会很快了

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2f033b75f35471281d53cbc7f34da18~tplv-k3u1fbpfcp-watermark.image)
  

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60d43bdd4eb747749c54f6341600306f~tplv-k3u1fbpfcp-watermark.image)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c59e88620b7e4e9f91f44ea78020beee~tplv-k3u1fbpfcp-watermark.image)

- 再说一个小知识:当我们修改vue文件的时候
  + 终端会弹出信息
  
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/047f830d96c4420b995bd3a895f28e53~tplv-k3u1fbpfcp-watermark.image)

  + 热更新只会请求当前的vue文件,不会请求全部的文件
  
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/023d0fecb39041b4b875e336482094ed~tplv-k3u1fbpfcp-watermark.image)

  + 而且在控制台也会有一样的提示

  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9db0a0d6bd142779be1984bd8d3137d~tplv-k3u1fbpfcp-watermark.image)

  + 说明Vite已经内置了热更新的功能