const remain = function () {
  const future = new Date(2022, 11, 31, 23, 59).getTime();
  const now = new Date().getTime();
  const remainingTime = future - now;

  let d = 24 * 60 * 60 * 1000;
  let h = 60 * 60 * 1000;
  let m = 60 * 1000;

  let days = Math.floor(remainingTime / d)
    .toString()
    .padStart(2, 0);
  let hour = Math.floor((remainingTime % d) / h)
    .toString()
    .padStart(2, 0)
    .toString()
    .padStart(2, 0);
  let min = Math.floor((remainingTime % h) / m)
    .toString()
    .padStart(2, 0);
  let sec = Math.floor((remainingTime % m) / 1000)
    .toString()
    .padStart(2, 0);

  const timeLeft = [days, hour, min, sec];
  const colors = ["green", "pink", "gold", "red"];

  const time = document.querySelectorAll(".tim");
  const span = document.querySelectorAll("span");

  time.forEach(function (t, i) {
    t.innerHTML = timeLeft[i];
    t.style.color = colors[i];
    span[i].style.color = colors[i];
  });
};

setInterval(remain, 1000);
