
function updateClock() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let day = weekday[dateTime.getDay()];
    let hrs = hr <10? "0"+hr:hr;
    let mins = min <10? "0"+ min:min;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = mins;

    document.getElementById('smallhours').innerHTML = hrs;
    document.getElementById('smallmins').innerHTML = mins;

   


    document.getElementById('days').textContent = day; 
}


setInterval(updateClock, 500);

let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timePause = document.getElementById("timePause");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours <10? "0"+hours:hours;
    let m = minutes <10? "0"+ minutes:minutes;
    let s = seconds <10? "0"+seconds:seconds;
    displayTime.innerHTML=h+":"+m+":"+s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch,1000);

}

function watchStop(){
    clearInterval(timer);
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timePause.innerHTML = h + ":" + m + ":" + s;


}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML = "00:00:00";
    timePause.innerHTML = "00:00:00";
}


function showHomePage(){
    document.getElementById('currentTime').style.display='block';
    document.getElementById('weatherDay').style.display='block';
    document.getElementById('times').style.display = 'none';
    document.getElementById('message').style.display='none';
    document.getElementById('music').style.display = 'none';
}

function showMessagePage(){
    document.getElementById('message').style.display='block';
    document.getElementById('currentTime').style.display='none';
    document.getElementById('weatherDay').style.display='none';
    document.getElementById('times').style.display = 'none';
    document.getElementById('music').style.display = 'none';
}

function showMusicPage(){
    document.getElementById('message').style.display='none';
    document.getElementById('currentTime').style.display='none';
    document.getElementById('weatherDay').style.display='none';
    document.getElementById('times').style.display = 'none';
    document.getElementById('music').style.display = 'block';

}

function showTimer() {
    document.getElementById('times').style.display = 'block';
    document.getElementById('currentTime').style.display = 'none';
    document.getElementById('weatherDay').style.display='none';
    document.getElementById('message').style.display='none';
    document.getElementById('music').style.display = 'none';
}

showHomePage();

var city="delhi"
var weatherData;
async function getWeather(){
    const data= await fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87cfbc9449359a5449b017e2d4c55013`)

   
  weatherData= await data.json();
const iconId=weatherData.weather[0].icon
const iconUrl=`http://openweathermap.org/img/w/${iconId}.png`
document.querySelector(".weatherIcon").src=iconUrl;
}

getWeather();








