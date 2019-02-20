if (navigator.serviceWorker) {
    //绑定事件
    let btn = document.getElementById("send-msg-button")
    let val = document.getElementById("msg-input")
    let box = document.getElementById("msgBox")
    btn.addEventListener("click", function () {
        //发送消息给serviceWorker
        navigator.serviceWorker.controller.postMessage(val.value)
    })
    //监听信息
    navigator.serviceWorker.addEventListener("message",function(e){
       box.innerHTML+="<li>"+event.data.message+"</li>"  //将信息发送给客户端
    })
    //注册serviceWorker,并定义作用范围
    navigator.serviceWorker.register("./serviceWorker.js", { scope: './' }).then((reg) => {
        console.log("regist success", reg)
    }).catch((e) => {
        console.log("regist error")
    })
} else {
    alert("service Worker is not supported")
}