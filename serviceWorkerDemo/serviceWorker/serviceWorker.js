self.addEventListener("install", function (e) {
    e.waitUntil(caches.open('app-v1').then((cache) => { //worker开启前作基础数据缓存
        console.log("open cache")
        return cache.addAll([  //添加离线缓存资源以备实现基础离线交互
            './app.js',
            './main.css',
            './index.html'
        ])
    }))
})
self.addEventListener("fetch",function(event){ //获取离线缓存资源
   event.respondWith(caches.match(event.request).then((res)=>{ //拦截资源请求，检查cache缓存是否存在
      if(res){
          return res  //cache缓存有匹配资源则返回缓存资源
      }else{
          //如果没有通过网络fetch资源
          fetch(URL).then((res)=>{
              if(res){
                 //如果从网络中请求到相关资源就缓存起来以便下次直接用缓存
                //  caches.addAll(res)
              }else{
                 //提示用户请求失败
              }
          })
      }
   }))
})