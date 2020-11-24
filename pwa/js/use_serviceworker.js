/************************
 * USE A SERVICE WORKER *
 ************************/
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker Lab 04 PWA registered: " + serviceWorker.scope);
            })
            .catch(error => {
                console.error("Error registering the Service Worker  Lab 04 PWA: ", error);
            });
    });
}
