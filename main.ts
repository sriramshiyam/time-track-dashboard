let dwm = document.querySelectorAll(".jr .two small");
let h2 = document.querySelectorAll(".box div h2");
let small = document.querySelectorAll(".box div .divsm");

enum DWM {
  daily,
  weekly,
  monthly,
}

dwm.forEach((x, index) => {
  x.style.color = "hsl(235, 45%, 61%)";
  x.addEventListener("click", () => {
    let i = index;
    if (i === DWM.daily) {
      info(i);
      dwm[DWM.daily].style.color = "white";
      dwm[DWM.weekly].style.color = "hsl(235, 45%, 61%)";
      dwm[DWM.monthly].style.color = "hsl(235, 45%, 61%)";
    } else if (i === DWM.weekly) {
      info(i);
      dwm[DWM.weekly].style.color = "white";
      dwm[DWM.daily].style.color = "hsl(235, 45%, 61%)";
      dwm[DWM.monthly].style.color = "hsl(235, 45%, 61%)";
    } else if (i === DWM.monthly) {
      info(i);
      dwm[DWM.monthly].style.color = "white";
      dwm[DWM.daily].style.color = "hsl(235, 45%, 61%)";
      dwm[DWM.weekly].style.color = "hsl(235, 45%, 61%)";
    }
  });
});

dwm[DWM.weekly].style.color = "white";

async function info(num: number) {
  let inf = await fetch("./data.json")
    .then((r) => r.json())
    .then((res) => res);
  let t =
    num === 0 ? "daily" : num === 1 ? "weekly" : num === 2 ? "monthly" : "";

  h2.forEach((H2, index) => {
    H2.innerHTML = `${inf[index]["timeframes"][t]["current"]}hrs`;
  });

  small.forEach((SMALL, index) => {
    let d = num === 0 ? "Day" : num === 1 ? "Week" : num === 2 ? "Month" : "";
    SMALL.innerHTML = `Last ${d} - ${inf[index]["timeframes"][t]["previous"]}hrs`;
  });
}
