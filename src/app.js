/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird", "Mary"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    who[4] + " " + action[1] + " " + what[2] + " " + when[3];
};
