const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//fill listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop through Empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragover);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
}

//drag functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragover(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function drop() {
  this.className = "empty";
  this.append(fill);
}
