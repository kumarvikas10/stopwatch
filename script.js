// Initilize the values for timer : minutes , hours , seconds
let [minutes, hours, seconds] = [0, 0, 0];
let timerRef = document.querySelector(".display");
let int = null;

//Using start to set the interval by One Second
document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});

//Using Stop button to Stop the value of set interval
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(int);
});

//With the help of innerhtml reset button works
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [minutes, hours, seconds] = [0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00";
});

//for every setinterval:1000, second=1 and when second=60 it increse minutes and same goes with hours.
function displayTimer() {
  seconds += 1;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerRef.innerHTML = `${h} : ${m} : ${s}`;
}
