function press1() {
document.getElementById("press").innerHTML = "Javascript Rules!!!"
}
function press2() {
document.getElementById("press").innerHTML = "I am a web developer and software engineer focusing in HTML (as well as CSS and Javascript) and Python respectively. My current projects are this website and  some python scripts.";
}
function drop() {
  document.getElementById("drop").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
