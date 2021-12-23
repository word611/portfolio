const clock = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   const hours = String(date.getHours()).padStart(2,"0");
   const minutes =String(date.getMinutes()).padStart(2,"0");
   const seconds =String(date.getSeconds()).padStart(2,"0");
   clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);

/*
const clockTitle = document.querySelector(".js-clock");

function getday() {
  const dday = new Date("2021-12-25:00:00:00+0900");
  const tday = new Date();
  const gap = dday - tday;
  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(((gap / 1000) * 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getday();
setInterval(getday, 1000);*/
