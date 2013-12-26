function x() {
    if (typeof css_support == "undefined") {
        document.write("Your browser does not support the required CSS properties");
        return;
    }
    setInterval(rainGenerator.init, 300);
}
setTimeout(x, 500);
