function doStuff(){
  var x = document.getElementById("my-form");
  var i = 0;
  var show = true;
  for (i = 0; i < x.length ;i++) {
    console.log(x.elements[i])
    if (x.elements[i].name == "wants" && x.elements[i].value != "free things") {
        show = false;
    }
    if (x.elements[i].name == "who" && x.elements[i].value != "yes") {
        show = false;
    }
  }
  if (show) {
    document.getElementById("before").style.display = "none";
    document.getElementById("flier").style.display = 'block';
  } else {
    modal.style.display = "block";
  }
}

var btn = document.getElementById("myBtn");
btn.onclick = function(evt) {
  evt.preventDefault();
  doStuff();
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
