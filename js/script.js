"use strict";
const btn = document.querySelectorAll(".btn");
document.body.addEventListener("keypress", event => {
  btn.forEach(element => {
    if (element.innerText.toLowerCase() === event.key.toLowerCase()) {
      element.style.backgroundColor = "blue";
    } else element.style.backgroundColor = "";
  });
});
