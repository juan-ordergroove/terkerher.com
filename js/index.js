TacoRainGenerator = (function(win, doc) {

    function div_gen() {
        var img = doc.createElement('img');
        img.setAttribute('src', 'https://scontent-a-ord.xx.fbcdn.net/hphotos-ash2/542396_10100455869735192_1696391421_n.jpg');
        img.setAttribute('width', '130px');
        img.setAttribute('height', '100px');

        var d = doc.createElement('div');
        d.setAttribute('class', 'terker');
        d.appendChild(img);
        //d.innerHTML = 'testing';
        return d;
    }

    function set_anim_settings(div, l, dur, cb_1, cb_2) {
        function anim_callback(evt) { this.parentNode.removeChild(this); }
       
        var cb_params = [cb_1, cb_2, Math.abs(1-cb_1), cb_2];
        div.style.left = l+'px';
        div.style.webkitAnimationName = 'rain';
        div.style.webkitAnimationDuration = dur+'s';
        div.style.webkitAnimationTimingFunction = 'cubic-bezier('+cb_params.join(',')+')';
        div.style.webkitAnimationDelay = '0s';
        div.style.webkitAnimationIterationCount = 'infinite';
        div.addEventListener('webkitAnimationIteration', anim_callback, false);
        return div;
    }

    function config_animation(div) {
        var l = Math.floor((Math.random() * win.outerWidth) - 20);
        var dur = Math.random() * 3 + 0.1;
        var cb_1 = Math.random()*0.9 + 0.1;
        var cb_2 = Math.random()*0.9 + 0.1;
        return set_anim_settings(div, l, dur, cb_1, cb_2);
    }

    function init() {
        var div = div_gen();
        div = config_animation(div);
        doc.body.appendChild(div);
    }
    return { init: init };

}(window, document));

function x() {
    setInterval(TacoRainGenerator.init, 300);
    setInterval(TacoRainGenerator.init, 300);
    setInterval(TacoRainGenerator.init, 300);
    setInterval(TacoRainGenerator.init, 300);
    setInterval(TacoRainGenerator.init, 300);
}
setTimeout(x, 500);
