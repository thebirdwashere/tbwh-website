document.getElementById("main-nav").addEventListener("mouseenter", function(e) {
    document.querySelector("h1").style.paddingTop = 0;
    document.querySelector("h1").style.letterSpacing = "2px";
    document.querySelector("i").style.color = "#ffffff00";
    console.log("test");
});

document.getElementById("main-nav").addEventListener("mouseleave", function(e) {
    document.querySelector("h1").style.paddingTop = "40px";
    document.querySelector("h1").style.letterSpacing = "normal";
    document.querySelector("i").style.color = "#ffffff";
    console.log("test");
});

document.getElementById("header").addEventListener("mouseenter", function(e) {
    document.querySelector("h1").style.paddingTop = 0;
    document.querySelector("h1").style.letterSpacing = "2px";
    document.querySelector("i").style.color = "#ffffff00";
    console.log("test");
});

document.getElementById("header").addEventListener("mouseleave", function(e) {
    document.querySelector("h1").style.paddingTop = "40px";
    document.querySelector("h1").style.letterSpacing = "normal";
    document.querySelector("i").style.color = "#ffffff";
    console.log("test");
});