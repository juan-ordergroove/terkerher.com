(function(win, doc) {
    function div_gen() {
        var d = doc.createElement('div');
        d.setAttribute('class', 'terker');
        d.innerHTML = 'testing';
        return d;
    }

    function anim_settings(div) {
        var l = Math.floor((Math.random()*win.outerWidth)+1);
        div.style.left = l+'px';
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
