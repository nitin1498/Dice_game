var name1 = prompt("player 1 enter your name");
var name2 = prompt("player 2 enter your name");
document.querySelector("p.name1").innerHTML = name1;
document.querySelector("p.name2").innerHTML = name2;

document.querySelector(".play").addEventListener("click", function() {
    document.querySelector(".play").innerHTML="play again";
  var randomNumber1 = Math.random() * 6 + 1;
  randomNumber1 = Math.floor(randomNumber1);
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = name2 + " win";
  else if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = name1 + " win";
  else document.querySelector("h1").innerHTML = "draw";
});
