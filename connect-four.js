window.addEventListener("DOMContentLoaded", () => {
  const square0 = document.getElementById("square-0-0");
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("token", "black");
  square0.appendChild(squareDiv);

  const square1 = document.getElementById("square-0-1");
  const square1Div = document.createElement("div");
  square1Div.classList.add("token", "red");
  square1.appendChild(square1Div);
});
