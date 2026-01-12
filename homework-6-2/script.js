function resetLights() {
  document.getElementById("red").classList.remove("active");
  document.getElementById("yellow").classList.remove("active");
  document.getElementById("green").classList.remove("active");
}

function switchLight() {
  resetLights();

  switch (state) {
    case 0: // Красный — 3 сек
      document.getElementById("red").classList.add("active");
      setTimeout(() => {
        state = 1;
        switchLight();
      }, 3000);
      break;

    case 1: // Жёлтый — 1 сек
      document.getElementById("yellow").classList.add("active");
      setTimeout(() => {
        state = 2;
        switchLight();
      }, 1000);
      break;

    case 2: // Зелёный — 2 сек
      document.getElementById("green").classList.add("active");
      setTimeout(() => {
        state = 0;
        switchLight();
      }, 2000);
      break;
  }
}
let state = 0;

switchLight();

// function resetLights() {
//   document.getElementById("red").classList.remove("active");
//   document.getElementById("yellow").classList.remove("active");
//   document.getElementById("green").classList.remove("active");
// }

// let state = 0; // 0 — красный, 1 — жёлтый, 2 — зелёный
// let timer = 0;
// const interval = setInterval(() => {
//   switch (state) {
//     case 0: // Красный — 3 сек
//       if (timer === 0) {
//         resetLights();
//         document.getElementById("red").classList.add("active");
//       }
//       timer += 100;
//       if (timer >= 3000) {
//         state = 1;
//         timer = 0;
//       }
//       break;

//     case 1: // Жёлтый — 1 сек
//       if (timer === 0) {
//         resetLights();
//         document.getElementById("yellow").classList.add("active");
//       }
//       timer += 100;
//       if (timer >= 1000) {
//         state = 2;
//         timer = 0;
//       }
//       break;
//     case 2: // Зелёный — 2 сек
//       if (timer === 0) {
//         resetLights();
//         document.getElementById("green").classList.add("active");
//       }
//       timer += 100;
//       if (timer >= 2000) {
//         state = 0;
//         timer = 0;
//       }
//       break;
//   }
// }, 100);

// resetLights();
