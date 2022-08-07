function display(val) {
  document.getElementById("textval").value += val;
}
function equal() {
  let x = document.getElementById("textval").value;
  let y = math.evaluate(x);
  document.getElementById("textval").value = y;
}

function clr() {
  document.getElementById("textval").value = "";
}
