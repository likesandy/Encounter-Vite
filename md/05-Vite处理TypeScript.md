# Vite对TypeScript的支持

- Vite对TypeScript是原生支持的,它会直接使用ESBuild来完成编译
  + 只需要直接导入就可以了

- 如果我们查看浏览器中的请求,会发现浏览器居然可以请求ts文件
  + ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9c87206244c401197037a0cfee48f13~tplv-k3u1fbpfcp-watermark.image)
  + 这里小小探究一下原理
  + 猜想Vite通过Connect库在本地搭建了一个服务器
  + 然后当你处理一下浏览器不认识的文件的时候,比如less和ts,它会帮你处理成其他的js文件
  + 然后你请求的时候,它会拦截浏览器请求的文件,通过转发(重定向)的方式将需要传给浏览器的文件给重定向为处理过后的文件
  + 所以当浏览器真正reponse响应的时候,响应的其实是vite处理之后的文件
  + 所以最终传给浏览器的是处理好的文件
  + 虽然浏览器这里看起来像是在请求我们原来发送的文件
  + 但是真实返回的其实是vite处理以后的文件
  + 而浏览器是可以识别处理以后的文件的
  + 最终我们就可以看到最终的运行效果了
  + 这里我们可以看看真正请求下来的文件不是原来的文件
  + ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b3a8701c8c6414bb837105b6c659357~tplv-k3u1fbpfcp-watermark.image)
  + 看这个文件哪里有什么ts的代码,因为这些代码不是原来的ts的代码,最终返回的是编译好的文件

- 注意:在Vite2中,已经不再使用Koa了,而是使用Connect来搭建服务器

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/850a3dd1bdcf48e6a1d3bde0afa929f5~tplv-k3u1fbpfcp-watermark.image)

> 我的个人理解:Vite内部服务器做的事情,并不是中间件做的事情,而是把请求修改成另外的请求,而在响应的时候给它响应另外的数据,而做这些事情Connect库是更擅长的,所以在Vite2中把原来的Koa转为了Connect