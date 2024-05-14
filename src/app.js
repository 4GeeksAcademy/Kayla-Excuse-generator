/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomExcuse() {
  let who = [
    "A lonely comedian",
    "A lonely merchant",
    "A slow merchant",
    "A two headed pinecone",
    "A lonely jogger"
  ];
  let action = ["burned", "kicked", "threw", "yelled at"];
  let what = ["my sandwhich", "my computer", "the car"];
  let where = [
    "in the house",
    "near the toilet",
    "on the street",
    "in front of the office",
    "while I was praying"
  ];
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhere = where[Math.floor(Math.random() * where.length)];
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhere}`;
  return excuse;
}

window.onload = () => {
  //write your code here
  const p = document.querySelector("#excuse");
  p.innerHTML = getRandomExcuse();
};
