let EXTENSIONSBOTTOMBAR = document.createElement("div");
EXTENSIONSBOTTOMBAR.style = "user-select:none;width:160px;height:20px;position:fixed;right:0;bottom:0px;background-color:white;border-radius:5px 0px 0px 0px;font-family:arial;display:flex;align-items:center;justify-content:left;border-style:solid;border-width:1px 0px 0px 1px;border-color:rgba(200, 198, 198, 1);font-size:14px;"
document.body.appendChild(EXTENSIONSBOTTOMBAR);
setInterval(function () {
    let EXTENSIONCLOCKHOUR = new Date().getHours();
    if (EXTENSIONCLOCKHOUR == 0) {
        EXTENSIONCLOCKHOUR = 12;
    } else if (EXTENSIONCLOCKHOUR > 12) {
        EXTENSIONCLOCKHOUR = EXTENSIONCLOCKHOUR - 12
    }
    if (EXTENSIONCLOCKHOUR.toString().length == 1) {
        EXTENSIONCLOCKHOUR = "0" + EXTENSIONCLOCKHOUR
    }
    EXTENSIONCLOCKHOUR = EXTENSIONCLOCKHOUR.toString()

    let EXTENSIONCLOCKMINUTE = new Date().getMinutes()
    if (EXTENSIONCLOCKMINUTE.toString().length == 1) {
        EXTENSIONCLOCKMINUTE = "0" + EXTENSIONCLOCKMINUTE
    }

    let EXTENSIONCLOCKSECOND = new Date().getSeconds()
    console.log(EXTENSIONCLOCKSECOND.toString().length)
    if (EXTENSIONCLOCKSECOND.toString().length == 1) {
        EXTENSIONCLOCKSECOND = "0" + EXTENSIONCLOCKSECOND
    }
    EXTENSIONSBOTTOMBAR.innerHTML = "<p style=\"margin-left:3px;padding:0px;margin-bottom:0px;\">" + "<span>" + EXTENSIONCLOCKHOUR + ":" + EXTENSIONCLOCKMINUTE + ":" + EXTENSIONCLOCKSECOND + "</span>" + "<span style=\"color:lightgray\"> | </span>" + "<span>" + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + "</span>" + "</p>";
}, 500)