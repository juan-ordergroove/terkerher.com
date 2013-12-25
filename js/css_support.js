(function(win,doc) {
    var css = {};
    if (typeof document.body.style.webkitAnimationName !== 'undefined') {
        css = {
            name: 'webkitAnimationName', duration: 'webkitAnimationDuration',
            timing_fn: 'webkitAnimationTimingFunction', delay: 'webkitAnimationDelay',
            iteration_cnt: 'webkitAnimationIterationCount',
            iteration_fn: 'webkitAnimationIteration'
        };
    } else if (typeof document.body.style.mozAnimationName !== 'undefined') {
        css = {
            name: 'mozAnimationName', duration: 'mozAnimationDuration',
            timing_fn: 'mozAnimationTimingFunction', delay: 'mozAnimationDelay',
            iteration_cnt: 'mozAnimationIterationCount',
            iteration_fn: 'mozAnimationIteration'
        };
    } else if (typeof document.body.style.oAnimationName !== 'undefined') {
        css = {
            name: 'oAnimationName', duration: 'oAnimationDuration',
            timing_fn: 'oAnimationTimingFunction', delay: 'oAnimationDelay',
            iteration_cnt: 'oAnimationIterationCount',
            iteration_fn: 'oAnimationIteration'
        };
    } else if (typeof document.body.style.animationName !== 'undefined') {
        css = {
            name: 'animationName', duration: 'animationDuration',
            timing_fn: 'animationTimingFunction', delay: 'animationDelay',
            iteration_cnt: 'animationIterationCount',
            iteration_fn: 'animationIteration'
        };
    } else { css = undefined; }
    win['css_support'] = css;
}(window,document));
