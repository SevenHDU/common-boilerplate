// This file is injected as a content script
const DOMAIN_LIST = ["https://m-bean.kaola.com/"];
const referrer = document.referrer;
console.log('referrer:', referrer);
if (DOMAIN_LIST.indexOf(referrer) > -1) {
    console.log('hit');
    const body = document.body;
    setTimeout(() => {
        console.log('mousedown');
        fireMouseEvent(body, 'mousedown', {
            bubbles: true,
            cancelable: true,
            view: window
        });
    
        setTimeout(() => {
            console.log('mousemove');
            fireMouseEvent(body, 'mousemove', {
                bubbles: true,
                cancelable: true,
                screenY: 300,
            });
        }, 0)
    
        setTimeout(() => {
            console.log('mouseup');
            fireMouseEvent(body, 'mouseup', {
                bubbles: true,
                cancelable: true,
                screenY: 300,
            });
        }, 2000);
    }, 3000)
}


function fireMouseEvent(dom, eventType, params) {
    params = Object.assign({
        bubbles: false,
        cancelable: false,
        view: window,
        screenX : 0,
        screenY : 0,
        clientX : 0,
        clientY : 0,
        ctrlKey : false,
        altKey : false,
        shiftKey : false,
        metaKey : false,
        button : 0,
        relatedTarget : null
    }, params);

    console.log(params);

    const ev = new MouseEvent(eventType, params);

    dom.dispatchEvent(ev);
}

const body = document.body;
    setTimeout(() => {
        console.log('mousedown');
        fireMouseEvent(body, 'mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            screenY: 300,
        });
    
        setTimeout(() => {
            console.log('mousemove');
            fireMouseEvent(body, 'mousemove', {
                bubbles: true,
                cancelable: true,
                screenY: 100,
            });
        }, 0)
    
        setTimeout(() => {
            console.log('mouseup');
            fireMouseEvent(body, 'mouseup', {
                bubbles: true,
                cancelable: true,
                screenY: 100,
            });
        }, 2000);
    }, 3000)

console.log("Hello from content script!")