var timer;
var t = document.querySelector("#time");

(function(){
    var sec = 0;
    timer = setInterval(()=>{
    t.innerHTML = "00:"+sec;
    sec ++;

    },1000)
})()

function stop(){
clearInterval(timer);
}