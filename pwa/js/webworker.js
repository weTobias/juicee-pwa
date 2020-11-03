/**************
 * WEB WORKER *
 **************/
self.addEventListener("message", function(messageEvent) {

  if (messageEvent.data === "hello") {
    self.postMessage("Hello to you too !");
  }

  if (messageEvent.data === "recurring task") {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => self.postMessage(function(){
        var dn=new Date();
        return 'Time' + dn.getHours() + ":" + dn.getSeconds();
      }()), i * 1000);
    }
  }

});
