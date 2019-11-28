// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
let form = document.getElementById("sizePicker");
function makeGrid(event) {
  // Your code goes here!
  event.preventDefault();
  let color = document.getElementById("colorPicker").value;
  let width = document.getElementById("inputWidth").value;
  let height = document.getElementById("inputHeight").value;
  let table = document.getElementById("pixelCanvas");
  for (let i = 0; i < height; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < width; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
}
let tds = document.querySelector("td");
form.addEventListener("submit", makeGrid);
