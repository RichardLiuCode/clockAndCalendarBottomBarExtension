let EXTENSIONSBOTTOMBAR = document.createElement("div");
EXTENSIONSBOTTOMBAR.style = "width:170px;height:20px;position:fixed;right:4px;bottom:0px;background-color:rgba(244, 244, 248, 0.61);border-radius:4px;font-family:arial;display:flex;align-items:center;justify-content:center;"
document.body.appendChild(EXTENSIONSBOTTOMBAR);
setInterval(function () {
    let EXTENSIONCLOCHHOUR = new Date().getHours();
    if (EXTENSIONCLOCHHOUR == 0) {
        EXTENSIONCLOCHHOUR = 12;
    }
    EXTENSIONSBOTTOMBAR.innerHTML = "<p>" + "<span>" + EXTENSIONCLOCHHOUR.toString() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "</span>" + "<span style=\"color:lightgray\"> | </span>" + "<span>" + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + "</span>" + "</p>";
}, 500)