let userName = prompt("Lütfen adinizi giriniz");
document.querySelector("#myName").innerHTML = `${userName}`;
let timeDiv = document.getElementById("myClock");
function showTime() {
 
    const weekday = ["Pazar", "Pazartesi","Sali", "Çarşamba", "Perşembe","Cuma",  "Cumartesi", ];
  
    var time = new Date(),
    
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    day = weekday[time.getDay()];

  timeDiv.innerHTML = hours + ":" + minutes + ":" + seconds + "  " + day
}

setInterval(showTime(), 1000);
