/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  let excuseEl = document.getElementById("excuse");
  const whoRandomText = Math.floor(Math.random() * who.length);
  const actionRandomText = Math.floor(Math.random() * action.length);
  const whatRandomText = Math.floor(Math.random() * what.length);
  const whenRandomText = Math.floor(Math.random() * when.length);
  excuseEl.innerHTML =
    who[whoRandomText] +
    " " +
    action[actionRandomText] +
    " " +
    what[whatRandomText] +
    " " +
    when[whenRandomText];
};
