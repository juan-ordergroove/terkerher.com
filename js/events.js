/*
    From: http://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser
*/
eventManager = (function(win, doc) {
    // add event cross browser
    function addEvent(elem, event, fn) {
        // avoid memory overhead of new anonymous 
        // functions for every event handler that's installed
        // by using local functions
        function listenHandler(e) {
            var ret = fn.apply(this, arguments);
            if (ret === false) {
                e.stopPropagation();
                e.preventDefault();
            }
            return(ret);
        }

        function attachHandler() {
            // set the this pointer same as addEventListener when fn is called
            // and make sure the event is passed to the fn also so that works the same too
            var ret = fn.call(elem, win.event);   
            if (ret === false) {
                win.event.returnValue = false;
                win.event.cancelBubble = true;
            }
            return(ret);
        }
 
        if (elem.addEventListener) {
            elem.addEventListener(event, listenHandler, false);
        } else {
            elem.attachEvent("on" + event, attachHandler);
        }
    }
    return { addEvent: addEvent };
}(window, document));
