import  {example}  from './rickandmorty.js';

console.log(example);


// Get the modal
let modalChar = document.getElementById("modalChar");
let modalPlace = document.getElementById("modalPlace");
let modalUs = document.getElementById("modalUs");
// Get the button that opens the modal
let charters = document.getElementById("botonimagenR");
let places = document.getElementById("placesButton");
let us=document.getElementById("usButton")
// Get the <span> element that closes the modal
let spanChar = document.getElementsByClassName("closeChar")[0];
let spanPlaces = document.getElementsByClassName("closePlaces")[0];
let spanUs = document.getElementsByClassName("closeUs")[0];
// When the user clicks the button, open the modal 
charters.onclick = function() {
  modalChar.style.display = "block";
}
spanChar.onclick = function() {
  modalChar.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalChar) {
    modalChar.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
places.onclick = function() {
  modalPlace.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanPlaces.onclick = function() {
  modalPlace.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalPlace) {
    modalPlace.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
us.onclick = function() {
  modalUs.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanUs.onclick = function() {
  modalUs.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalUs) {
    modalUs.style.display = "none";
  }
}
/*const yatoyharta
function yatoyharta {
  let chi = example.names;
  document.getElementById("demo").innerHTML += chi + " ";
}*/


