chase = (function(win, doc) {
    function mouse_move(evt) {
        console.log('mousemove');
        console.log(evt.clientX+', '+evt.clientY);
    }

    function init() {
        console.log('init.d');
        eventManager.addEvent(doc.body, 'mousemove', mouse_move);
    }
    return { init:init };
}(window, document));

function x() {
    chase.init();
}
setTimeout(x, 500);
