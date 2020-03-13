import change  from './data.js';

console.log(change.genderR());
//console.log(change.createCard())
  /*for(let i=0; i<493; i++){
    let imag = document.createElement("img");
    imag.src = data.results[i].image;
    let gender =  data.results[i].gender ;
    let status = data.results[i].status;
    let species= data.results[i].species;
    let origin = data.results[i].origin.name;
    let newid = data.results[i].origin.name;
    let card = `<h1 id="PERSONAJES"></h1>
                <div id="${newid}">
                  <div class="flip-card">
                    <p></p>
                    <div class="flip-card-inner">
                      <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                        <img src="${imag}">
                      </div>
                      <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                        <p>NOMBRE:${name}}</p>
                        <p>GENERO:${gender}}</p>
                        <p>STATUS:${status}}</p>
                        <p>ESPECIE:${species}}</p>
                        <p>ORIGEN:${origin}}</p>
                      </div>
                    </div>
                  </div>
                </div> `
  document.getElementById("modal-content").appendChild(card);
  }


for(let i=0; i<493; i++){
  data.results[i].name;
  document.getElementById("lug").innerHTML ="PERSONAJES" ;
console.log(data.results[i].image);
  let por = document.createElement("img");
  por.src = data.results[i].image;
  document.getElementById("flip-card-front").appendChild(por)
  let para = document.createElement("H2");
  para.innerText += (i+1)+" "+data.results[i].name ;
  document.getElementById("flip-card-back").appendChild(para);
  let inf = document.createElement("P");
  inf.innerHTML = "GENERO:" + data.results[i].gender +"<br>"+"STATUS:" + data.results[i].status+ "<br>"+"SPECIE:" + data.results[i].species+"<br>"+"ORIGEN:" + data.results[i].origin.name;
  document.getElementById("flip-card-back").appendChild(inf);
}*/
// INFO RICK EN MODAL

document.getElementById("bRick").innerHTML = change.bRick()
document.getElementById("genderR").innerHTML = change.genderR()
document.getElementById("statusR").innerHTML = change.statusR()
document.getElementById("speciesR").innerHTML = change.speciesR()
document.getElementById("originR").innerHTML = change.originR()
// INFO MORTY EN MODAL
document.getElementById("bMorty").innerHTML = change.bMorty()
document.getElementById("genderM").innerHTML = change.genderM()
document.getElementById("statusM").innerHTML = change.statusM()
document.getElementById("speciesM").innerHTML = change.speciesM()
document.getElementById("originM").innerHTML = change.originM()
// INFO SUMMER EN MODAL
document.getElementById("bSummer").innerHTML = change.bSummer()
document.getElementById("genderS").innerHTML = change.genderS()
document.getElementById("statusS").innerHTML = change.statusS()
document.getElementById("speciesS").innerHTML = change.speciesS()
document.getElementById("originS").innerHTML = change.originS()
// INFO BETH EN MODAL
document.getElementById("bBeth").innerHTML = change.bBeth()
document.getElementById("genderB").innerHTML = change.genderB()
document.getElementById("statusB").innerHTML = change.statusB()
document.getElementById("speciesB").innerHTML = change.speciesB()
document.getElementById("originB").innerHTML = change.originB()
// INFO JERRY EN MODAL
document.getElementById("bJerry").innerHTML = change.bJerry()
document.getElementById("genderJ").innerHTML = change.genderJ()
document.getElementById("statusJ").innerHTML = change.statusJ()
document.getElementById("speciesJ").innerHTML = change.speciesJ()
document.getElementById("originJ").innerHTML = change.originJ()

// INFO RICK EN MODAL
/*document.getElementById("bRick").innerHTML = data.results[0].name;
document.getElementById("genderR").innerHTML = "GENERO:" + change.results[0].gender;
document.getElementById("statusR").innerHTML = "STATUS:" + data.results[0].status;
document.getElementById("speciesR").innerHTML = "SPECIE:" + data.results[0].species;
document.getElementById("originR").innerHTML = "ORIGEN:" + data.results[0].origin.name;
// INFO MORTY EN MODAL
document.getElementById("bMorty").innerHTML = data.results[1].name;
document.getElementById("genderM").innerHTML = "GENERO:" + data.results[1].gender;
document.getElementById("statusM").innerHTML = "STATUS:" + data.results[1].status;
document.getElementById("speciesM").innerHTML = "SPECIE:" + data.results[1].species;
document.getElementById("originM").innerHTML = "ORIGEN:" + data.results[1].origin.name;
// INFO SUMMER EN MODAL
document.getElementById("bSummer").innerHTML = data.results[2].name;
document.getElementById("genderS").innerHTML = "GENERO:" + data.results[2].gender;
document.getElementById("statusS").innerHTML = "STATUS:" + data.results[2].status;
document.getElementById("speciesS").innerHTML = "SPECIE:" + data.results[2].species;
document.getElementById("originS").innerHTML = "ORIGEN:" + data.results[2].origin.name;
// INFO BETH EN MODAL
document.getElementById("bBeth").innerHTML = data.results[3].name;
document.getElementById("genderB").innerHTML = "GENERO:" + data.results[3].gender;
document.getElementById("statusB").innerHTML = "STATUS:" + data.results[3].status;
document.getElementById("speciesB").innerHTML = "SPECIE:" + data.results[3].species;
document.getElementById("originB").innerHTML = "ORIGEN:" + data.results[3].origin.name;
// INFO JERRY EN MODAL
document.getElementById("bJerry").innerHTML = data.results[4].name;
document.getElementById("genderJ").innerHTML = "GENERO:" + data.results[4].gender;
document.getElementById("statusJ").innerHTML = "STATUS:" + data.results[4].status;
document.getElementById("speciesJ").innerHTML = "SPECIE:" + data.results[4].species;
document.getElementById("originJ").innerHTML = "ORIGEN:" + data.results[4].origin.name;*/

// Get the modal
let modalS = document.getElementById("modalImgS");
let modalR = document.getElementById("modalImgR");
let modalM = document.getElementById("modalImgM");
let modalB = document.getElementById("modalImgB");
let modalJ = document.getElementById("modalImgJ");

let modalChar = document.getElementById("modalChar");
let modalPlace = document.getElementById("modalPlace");
let modalUs = document.getElementById("modalUs");

// Get the button that opens the modal
let summer = document.getElementById("botonimagenS");
let rick = document.getElementById("botonimagenR");
let morty = document.getElementById("botonimagenM");
let beth = document.getElementById("botonimagenB");
let jerry = document.getElementById("botonimagenJ");

let charters = document.getElementById("chartersButton");
let places = document.getElementById("placesButton");
let us=document.getElementById("usButton")

// Get the <span> element that closes the modal
let spanS = document.getElementsByClassName("closeS")[0];
let spanR = document.getElementsByClassName("closeR")[0];
let spanM = document.getElementsByClassName("closeM")[0];
let spanB = document.getElementsByClassName("closeB")[0];
let spanJ = document.getElementsByClassName("closeJ")[0];

let spanChar = document.getElementsByClassName("closeChar")[0];
let spanPlaces = document.getElementsByClassName("closePlaces")[0];
let spanUs = document.getElementsByClassName("closeUs")[0];

// When the user clicks the button, open the modal 
summer.onclick = function() {
  modalS.style.display = "block";
  
}
spanS.onclick = function() {
  modalS.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
rick.onclick = function() {
  modalR.style.display = "block";
}
spanR.onclick = function() {
  modalR.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalR) {
    modalR.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
morty.onclick = function() {
  modalM.style.display = "block";
}
spanM.onclick = function() {
  modalM.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalM) {
    modalM.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
beth.onclick = function() {
  modalB.style.display = "block";
}
spanB.onclick = function() {
  modalB.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
jerry.onclick = function() {
  modalJ.style.display = "block";
}
spanJ.onclick = function() {
  modalJ.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalJ) {
    modalJ.style.display = "none";
  }
}
console.log(change.value[1].name)
// When the user clicks the button, open the modal 
charters.onclick = function() {
  modalChar.style.display = "block";
  }

 
  for(let i=0; i<493; i++){
    let inf = document.createElement('div')
    inf.className="per"
  inf.innerHTML=`<h1 id="PERSONAJES"></h1>
                <div id="${change.value[i].id}">
                  <div class="flip-card">
                    <p></p>
                    <div class="flip-card-inner">
                      <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                        <img src="${change.value[i].image}">
                      </div>
                      <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                        <p>NOMBRE:${change.value[i].name}</p>
                        <p>GENERO:${change.value[i].gender}</p>
                        <p>STATUS:${change.value[i].status}</p>
                        <p>ESPECIE:${change.value[i].species}</p>
                        <p>ORIGEN:${change.value[i].origin}</p>
                      </div>
                    </div>
                  </div>
                </div> `
                document.getElementById("modalChar").appendChild(inf)
                //console.log(inf)
  }
  
  
  //console.log(createCard())
  //document.getElementsByClassName("modal-content").appendChild=createCard()
 //change.value.forEach( createCard)



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


