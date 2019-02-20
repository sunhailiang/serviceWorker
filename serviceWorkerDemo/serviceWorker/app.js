if(navigator.serviceWorker){
    //注册serviceWorker,并定义作用范围
    navigator.serviceWorker.register("./serviceWorker.js",{scope:'./'}).then((reg)=>{
      console.log("regist success")
    }).catch((e)=>{
        console.log("regist error")
    })
}else{
    alert("service Worker is not supported")
}