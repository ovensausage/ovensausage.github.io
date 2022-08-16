function press1() {
document.getElementById("press").innerHTML = "Javascript Rules!!!"
}
function press2() {
document.getElementById("press").innerHTML = "I am a web developer and software engineer focusing in HTML (as well as CSS and Javascript) and Python respectively. My current projects are this website and  some python scripts.";
}
function drop() {
  document.getElementById("drop").classList.toggle("show");
  document.getElementById("drop").id = "drop2";
  document.getElementById("drop2").classList.toggle("hide");
  document.getElementById("drop").id = "drop";
}
