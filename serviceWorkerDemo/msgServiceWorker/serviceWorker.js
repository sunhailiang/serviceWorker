self.addEventListener("message", function (e) {
    let promise = self.clients.matchAll().then((clientList) => {
        let senderId = e.source ? e.source.id : 'unknown';
        clientList.forEach(client => {
            if (client.id === senderId) {
                return  //当前发送页面直接返回不做处理
            } else {
                client.postMessage({ //其他监听页面广播当前信息
                    client: senderId,
                    message: e.data
                })
            }
        })
    })
    e.waitUntil(promise)
})