var player1 = prompt("enter Player 1 name");
var player2 = prompt("enter Player 2 name");
document.querySelectorAll("p")[0].textContent = player1;
document.querySelectorAll("p")[1].textContent = player2;
function MyFunction()
{
  var name="images/dice";
  var randome1=Math.floor(Math.random() * 6 ) + 1;
  var randome2=Math.floor(Math.random() * 6 ) + 1;

  dice1=name + randome1 + ".png";
  dice2=name + randome2 + ".png";
  document.querySelectorAll("img")[0].attributes.src.value = dice1;
  document.querySelectorAll("img")[1].attributes.src.value = dice2;
  if(randome1 == randome2)
  {
    document.querySelector("h1").textContent = "Draw !";
  }
  else if(randome1 > randome2)
  {
    document.querySelector("h1").textContent = "❤ " +player1+ " Wins";
  }
  else
  {
    document.querySelector("h1").textContent = player2+" Wins ❤";
  }
}
