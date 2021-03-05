console.log('hello');

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
audio.play();
function ringbell(){
    audio.play();
}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log( `Setting alarm for ${alarmDate}...`);
    now = new Date();
    let timetoAlarm = alarmDate - now
    console.log(timetoAlarm);
    if(timetoAlarm >= 0){
        setTimeout(()=>{
            ringbell();
        }, timetoAlarm)
    }
        
}