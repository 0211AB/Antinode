const stringMinutes= 180;
let time=stringMinutes*60;
const countDownEl=document.getElementById('countdown');
setInterval(updateCountdown,1000);
function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    countDownEl.innerHTML=`${minutes}:${seconds}`;
    time--;
}