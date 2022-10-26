// service worker to register push notification
self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Received...");
  self.registration.showNotification(data.title, {
    body: "Notified by Sample",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png",
  });
});
