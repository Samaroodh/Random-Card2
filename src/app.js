/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
var suite = ["heart", "spade", "club", "diamond"];
var cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var numberElement = document.querySelector(".content");

let cardIndex = Math.floor(Math.random() * cards.length);
let suiteIndex = Math.floor(Math.random() * suite.length);

console.log(cards[cardIndex]);
if (suite[suiteIndex] === "spade" || suite[suiteIndex] === "club") {
  numberElement.style.color = "black";
} else {
  numberElement.style.color = "red";
}

numberElement.innerHTML = cards[cardIndex];
document.querySelector(".card").className = "card" + " " + suite[suiteIndex];
