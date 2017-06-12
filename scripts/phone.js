$(function(){
    $(window).load(function() {
        if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
            console.log("is phone===");
            document.body.removeChild(document.getElementById("404-video"));
        }else {
            console.log("notis phone===");
        }
    })
});
