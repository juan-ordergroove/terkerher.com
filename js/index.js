(function(win, doc) {
    function div_gen() {
        var d = doc.createElement('div');
        d.setAttribute('class', 'terker');
        d.innerHTML = 'testing';
        return d;
    }

    function anim_settings(div) {
        var cb_1 = Math.random()*0.9 + 0.1;
        var cb_2 = Math.random()*0.9 + 0.1;
        var l = Math.floor((Math.random() * win.outerWidth) + 1);
        var dur = Math.floor((Math.random() * 3) + 1);

        div.style.left = l+'px';
        div.style.webkitAnimationName = 'rain';
        div.style.webkitAnimationDuration = dur+'s';
        div.style.webkitAnimationTimingFunction = 'cubic-bezier('+cb_1+','+cb_2+','+Math.abs(1-cb_1)+','+cb_2+')';
        div.style.webkitAnimationDelay = '0s';
        div.style.webkitAnimationIterationCount = 'infinite';
        return div;
    }

    function init() {
        var div = div_gen();
        div = anim_settings(div);
        doc.body.appendChild(div);
    }

    win['T'] = {
        'init': init
    };
    console.log("whushup");
}(window, document));
