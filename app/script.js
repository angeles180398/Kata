
function colorfondo() {
  document.getElementById("elementChange").style.backgroundColor = "#2c3e50";
  document.getElementById("elementChange").style.color = "#ecf0f1";
}
function colorfondoBlanco() {
  document.getElementById("elementChange").style.backgroundColor = "#ecf0f1";
  document.getElementById("elementChange").style.color = "#2c3e50";
}


document.addEventListener("keydown", function(event) {
  var x = event.keyCode;
  if (x == 32) {
    window.open("https://club-pro.glitch.me/opc.html");
    
  }
});