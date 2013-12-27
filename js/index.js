rainIntensity = (function(win, doc) {
    var intensity = [];
    function create_generator() {
        var generator_id = setInterval(rainGenerator.init, 300);
        intensity.push(generator_id);
    }

    function destroy_generator() {
        var generator_id = intensity.pop();
        clearInterval(generator_id);
    }

    function change_intensity(evt) {
        var intensity_lvl = evt.target.value;
        var curr_intensity = intensity.length;
        var increase = (intensity_lvl > curr_intensity);
        if (increase) {
            while (intensity_lvl > curr_intensity) {
                create_generator();
                curr_intensity = intensity.length;
            }
        } else {
            while (intensity_lvl < curr_intensity) {
                destroy_generator();
                curr_intensity = intensity.length;
            }
        }
    }

    function init() {
        create_generator();
        var intensity_s = document.getElementById('change_intensity');
        eventManager.addEvent(intensity_s, 'change', change_intensity);
    }
    return { init: init };
}(window, document));

function x() {
    if (typeof css_support == "undefined") {
        document.write("Your browser does not support the required CSS properties");
        return;
    }
    rainIntensity.init();
}
setTimeout(x, 500);
