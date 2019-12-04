                        importScripts("/site-gr/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/site-gr/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/site-gr//index.html","revision":"696f300810d9230688f876cedf9bac80"}];
                    if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/site-gr//sw-register.js?v=1575480596').then(function(reg) {
                reg.onupdatefound = function() {
                    var installingWorker = reg.installing;
                    installingWorker.onstatechange = function() {
                        switch (installingWorker.state) {
                            case 'installed':
                                if (navigator.serviceWorker.controller) {
                                    var event = document.createEvent('Event');
                                    event.initEvent('sw.update', true, true);
                                    window.dispatchEvent(event);
                                }
                                break;
                        }
                    };
                };
            }).catch(function(e) {
                console.error('Error during service worker registration:', e);
            });
        }

