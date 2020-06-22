// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
let form = document.getElementById("sizePicker");
function makeGrid(event) {
  // Your code goes here!
  let table = document.getElementById("pixelCanvas");
  let width = document.getElementById("inputWidth").value;
  let height = document.getElementById("inputHeight").value;
  event.preventDefault();
  while (table.firstChild) {
    table.firstChild.remove();
  }

  for (let i = 0; i < height; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < width; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  function addColor(event) {
    let color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
  }
  table.addEventListener("click", addColor);
}

form.addEventListener("submit", makeGrid);
