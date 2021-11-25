/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = finalExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let finalExcuse = () => {
  //create an array for each item possibility in the sentence structure
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "My crazy neighbor",
    "My evil twin from an alternate dimension"
  ];

  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "stole",
    "abducted",
    "mangled",
    "vandalized",
    "annihilated"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "the assignment",
    "the cloud",
    "my router",
    "my alarm clock"
  ];
  let when = [
    "before the class",
    "right on time",
    "right after I finished it!",
    "during my lunch",
    "while I was napping"
  ];

  //assign a random number to choose which item in each array displays
  let whoNum = Math.floor(Math.random() * who.length);
  let actionNum = Math.floor(Math.random() * action.length);
  let whatNum = Math.floor(Math.random() * what.length);
  let whenNum = Math.floor(Math.random() * when.length);

  //concoctonate the resulting output into a sentence
  return (
    who[whoNum] +
    " " +
    action[actionNum] +
    " " +
    what[whatNum] +
    " " +
    when[whenNum]
  );
};
