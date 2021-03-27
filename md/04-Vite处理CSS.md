# vite处理CSS

- Vite处理CSS不需要进行配置,直接导入使用就可以了

# Vite处理Less

  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6aae430f72094b08a3f48cd67f3e7bc1~tplv-k3u1fbpfcp-watermark.image)

- 这里报错是因为我们要使用Less,要有Less这个工具,这里安装一下Less

``
npm i less -D
``

- 现在就没有问题了,只需要安装对应的工具,不需要做任何的什么loader的配置

# 处理PostCSS

- 使用postcss首先还是需要先按照postcss
``
npm i postcss -D
``
- 然后安装好了就可以直接用了吗

- 当然不是,postcss是通过插件来对css进行处理的

- 所以要在根目录建立postcss.config.js的文件进行配置(这个学过Webpack的应该知道如何使用)

- 这里我们想给特定的css语句添加浏览器前缀,安装一个postcss-preset-env插件
``
npm i postcss-preset-env -D
``

- 之后运行项目就没有任何问题了

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc6a4b94ce4646bfb1e66545bb6c9210~tplv-k3u1fbpfcp-watermark.image)

> Vite中使用postcss也是不需要安装什么postcss-loader,不需要怎么配置,是不是用起来就非常的方便



