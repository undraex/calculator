const container = document.createElement("div");

const body = document.createElement("div");
const display = document.createElement("div");
display.id = "display";
display.textContent = "";
container.appendChild(display);

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");
const button8 = document.createElement("button");
const button9 = document.createElement("button");
const button0 = document.createElement("button");
const nemeh = document.createElement("button");
const hasah = document.createElement("button");
const urjih = document.createElement("button");
const huvaah = document.createElement("button");
const tentsuu = document.createElement("button");
const ac = document.createElement("button");
const huvi = document.createElement("button");
const butarhai = document.createElement("button");
const remove = document.createElement("button");
const esreg = document.createElement("button");

remove.innerHTML = "x";
ac.innerHTML = "AC";
button1.innerHTML = "1";
button2.innerHTML = "2";
button3.innerHTML = "3";
button4.innerHTML = "4";
button5.innerHTML = "5";
button6.innerHTML = "6";
button7.innerHTML = "7";
button8.innerHTML = "8";
button9.innerHTML = "9";
button0.innerHTML = "0";
nemeh.innerHTML = "−";
hasah.innerHTML = "+";
urjih.innerHTML = "×";
huvaah.innerHTML = "÷";
tentsuu.innerHTML = "=";
huvi.innerHTML = "%";
butarhai.innerHTML = ".";
esreg.innerHTML = "+/-";

container.classList.add("container");
container.classList.add("body");
huvaah.classList.add("pink");
urjih.classList.add("pink");
nemeh.classList.add("pink");
hasah.classList.add("pink");
tentsuu.classList.add("pink");

button7.classList.add("grey");
button8.classList.add("grey");
button9.classList.add("grey");
button4.classList.add("grey");
button5.classList.add("grey");
button6.classList.add("grey");
button1.classList.add("grey");
button2.classList.add("grey");
button3.classList.add("grey");
esreg.classList.add("grey");
button0.classList.add("grey");
butarhai.classList.add("grey");

remove.classList.add("light-grey");
ac.classList.add("light-grey");
huvi.classList.add("light-grey");

body.appendChild(remove);
body.appendChild(ac);
body.appendChild(huvi);
body.appendChild(huvaah);
body.appendChild(button7);
body.appendChild(button8);
body.appendChild(button9);
body.appendChild(urjih);
body.appendChild(button4);
body.appendChild(button5);
body.appendChild(button6);
body.appendChild(hasah);
body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);
body.appendChild(nemeh);
body.appendChild(esreg);
body.appendChild(button0);
body.appendChild(butarhai);
body.appendChild(tentsuu);
container.appendChild(body);
document.body.appendChild(container);

const buttons = {
  ac,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button0,
  nemeh,
  hasah,
  urjih,
  huvaah,
  esreg,
  huvi,
  tentsuu,
  remove,
  butarhai,
};

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button === ac) {
//         display.textContent = "";
//       } else if (button === tentsuu) {
//         try {
//           display.textContent = eval(display.textContent);
//         } catch {
//           display.textContent = "error";
//         }
//       } else {
//         display.textContent += button.textContent;
//       }
//     });
//   });

//   Object.values(buttons).forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button === ac) {
//         display.textContent = "";
//       } else if (button === tentsuu) {
//         try {
//           display.textContent = eval(display.textContent);
//         } catch {
//           display.textContent = "error";
//         }
//       } else {
//         display.textContent += button.textContent;
//       }
//     });
//   });

//   Object.values(buttons).forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button === ac) {
//         // Clear display
//         display.textContent = "";
//       } else if (button === tentsuu) {
//         // Evaluate expression
//         try {
//           // Replace operator symbols with JavaScript equivalents
//           let expression = display.textContent
//             .replace(/×/g, "*")
//             .replace(/÷/g, "/")
//             .replace(/−/g, "-");

//           display.textContent = eval(expression);
//         } catch {
//           display.textContent = "error";
//         }
//       } else if (button === remove) {
//         // Remove last character
//         display.textContent = display.textContent.slice(0, -1);
//       } else if (button === huvi) {
//         // Percentage: evaluate and divide by 100
//         try {
//           let expression = display.textContent
//             .replace(/×/g, "*")
//             .replace(/÷/g, "/")
//             .replace(/−/g, "-");

//           let result = eval(expression);
//           display.textContent = result / 100;
//         } catch {
//           display.textContent = "error";
//         }
//       } else if (button === esreg) {
//         // Plus/minus toggle: negate evaluated result
//         try {
//           let expression = display.textContent
//             .replace(/×/g, "*")
//             .replace(/÷/g, "/")
//             .replace(/−/g, "-");

//           let result = eval(expression);
//           display.textContent = -result;
//         } catch {
//           display.textContent = "error";
//         }
//       } else {
//         // Append button text for numbers and operators
//         display.textContent += button.textContent;
//       }
//     });
//   });

// Object.values(buttons).forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button === ac) {
//       // Clear display
//       display.textContent = "";
//     } else if (button === remove) {
//       // Remove last character
//       display.textContent = display.textContent.slice(0, -1);
//     } else if (button === tentsuu) {
//       // Calculate result
//       try {
//         let exp = display.textContent
//           .replace(/×/g, "*")
//           .replace(/÷/g, "/")
//           .replace(/−/g, "-");
//         display.textContent = eval(exp);
//       } catch {
//         display.textContent = "error";
//       }
//     } else if (button === huvi) {
//       // Percentage
//       try {
//         let exp = display.textContent
//           .replace(/×/g, "*")
//           .replace(/÷/g, "/")
//           .replace(/−/g, "-");
//         display.textContent = eval(exp) / 100;
//       } catch {
//         display.textContent = "error";
//       }
//     } else if (button === esreg) {
//       // Plus/minus toggle
//       try {
//         let exp = display.textContent
//           .replace(/×/g, "*")
//           .replace(/÷/g, "/")
//           .replace(/−/g, "-");
//         display.textContent = -eval(exp);
//       } catch {
//         display.textContent = "error";
//       }
//     } else {
//       // For all other buttons just append their text
//       display.textContent += button.textContent;
//     }
//   });
// });
