var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let dwm = document.querySelectorAll(".jr .two small");
let h2 = document.querySelectorAll(".box div h2");
let small = document.querySelectorAll(".box div .divsm");
var DWM;
(function (DWM) {
    DWM[DWM["daily"] = 0] = "daily";
    DWM[DWM["weekly"] = 1] = "weekly";
    DWM[DWM["monthly"] = 2] = "monthly";
})(DWM || (DWM = {}));
dwm.forEach((x, index) => {
    x.style.color = "hsl(235, 45%, 61%)";
    x.addEventListener("click", () => {
        let i = index;
        if (i === DWM.daily) {
            info(i);
            dwm[DWM.daily].style.color = "white";
            dwm[DWM.weekly].style.color = "hsl(235, 45%, 61%)";
            dwm[DWM.monthly].style.color = "hsl(235, 45%, 61%)";
        }
        else if (i === DWM.weekly) {
            info(i);
            dwm[DWM.weekly].style.color = "white";
            dwm[DWM.daily].style.color = "hsl(235, 45%, 61%)";
            dwm[DWM.monthly].style.color = "hsl(235, 45%, 61%)";
        }
        else if (i === DWM.monthly) {
            info(i);
            dwm[DWM.monthly].style.color = "white";
            dwm[DWM.daily].style.color = "hsl(235, 45%, 61%)";
            dwm[DWM.weekly].style.color = "hsl(235, 45%, 61%)";
        }
    });
});
dwm[DWM.weekly].style.color = "white";
function info(num) {
    return __awaiter(this, void 0, void 0, function* () {
        let inf = yield fetch("./data.json")
            .then((r) => r.json())
            .then((res) => res);
        let t = num === 0 ? "daily" : num === 1 ? "weekly" : num === 2 ? "monthly" : "";
        h2.forEach((H2, index) => {
            H2.innerHTML = `${inf[index]["timeframes"][t]["current"]}hrs`;
        });
        small.forEach((SMALL, index) => {
            SMALL.innerHTML = `Last Week - ${inf[index]["timeframes"][t]["previous"]}hrs`;
        });
    });
}
