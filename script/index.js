// boutons background
const blocRendu = document.querySelector(".bloc-rendu");
const backgroundUn = document.querySelector("#background-un");
const backgroundDeux = document.querySelector("#background-deux");
const backgroundTrois = document.querySelector("#background-trois");
const backgroundQuatre = document.querySelector("#background-quatre");

const sansFond = document.querySelector("#sans-fond");
const choixUn = document.querySelector("#choix-un");
const choixDeux = document.querySelector("#choix-deux");
const choixTrois = document.querySelector("#choix-trois");
const choixQuatre = document.querySelector("#choix-quatre");

//Choix des éléments
const sansEl = document.querySelector("#sans-el");
const elUn = document.querySelector("#el-un");
const elDeux = document.querySelector("#el-deux");
const elTrois = document.querySelector("#el-trois");
const elQuatre = document.querySelector("#el-quatre");

const assetUn = document.querySelector("#asset-un");
const assetDeux = document.querySelector("#asset-deux");
const assetTrois = document.querySelector("#asset-trois");
const assetQuatre = document.querySelector("#asset-quatre");

// boutons celebrites
const zendaya = document.getElementById("zendaya");
const liza = document.getElementById("liza");
const doja = document.getElementById("doja");
const duaLipa = document.getElementById("dua-lipa");

const choixZendaya = document.getElementById("choix-zendaya");
const choixLiza = document.getElementById("choix-liza");
const choixDoja = document.getElementById("choix-doja");
const choixDuaLipa = document.getElementById("choix-dua-lipa");

//couleur du bouton vogue
var logoVogue = document.getElementById("logo-vogue-rendu");






sansFond.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid white";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixUn.addEventListener("click", ()=>{

    choixUn.style.border = "3px solid white";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "visible";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixDeux.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "3px solid white";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "visible";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixTrois.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "3px solid white";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "visible";
    backgroundQuatre.style.visibility = "hidden";
})

choixQuatre.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "3px solid white";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "visible";   
})



sansEl.addEventListener("click", ()=>{

    elUn.style.border = "0px solid black";
    elDeux.style.border = "0px solid black";
    elTrois.style.border = "0px solid black";
    elQuatre.style.border = "0px solid black";

    assetUn.style.visibility = "hidden";
    assetDeux.style.visibility = "hidden";
    assetTrois.style.visibility = "hidden";
    assetQuatre.style.visibility = "hidden";
})

elUn.addEventListener("click", ()=>{

    elUn.style.border = "3px solid white";
    elDeux.style.border = "0px solid black";
    elTrois.style.border = "0px solid black";
    elQuatre.style.border = "0px solid black";

    assetUn.style.visibility = "visible";
    assetDeux.style.visibility = "hidden";
    assetTrois.style.visibility = "hidden";
    assetQuatre.style.visibility = "hidden";
})

elDeux.addEventListener("click", ()=>{

    elUn.style.border = "0px solid black";
    elDeux.style.border = "3px solid white";
    elTrois.style.border = "0px solid black";
    elQuatre.style.border = "0px solid black";

    assetUn.style.visibility = "hidden";
    assetDeux.style.visibility = "visible";
    assetTrois.style.visibility = "hidden";
    assetQuatre.style.visibility = "hidden";
})

elTrois.addEventListener("click", ()=>{

    elUn.style.border = "0px solid black";
    elDeux.style.border = "0px solid black";
    elTrois.style.border = "3px solid white";
    elQuatre.style.border = "0px solid black";

    assetUn.style.visibility = "hidden";
    assetDeux.style.visibility = "hidden";
    assetTrois.style.visibility = "visible";
    assetQuatre.style.visibility = "hidden";
})

elQuatre.addEventListener("click", ()=>{

    elUn.style.border = "0px solid black";
    elDeux.style.border = "0px solid black";
    elTrois.style.border = "0px solid black";
    elQuatre.style.border = "3px solid white";

    assetUn.style.visibility = "hidden";
    assetDeux.style.visibility = "hidden";
    assetTrois.style.visibility = "hidden";
    assetQuatre.style.visibility = "visible";
})

choixZendaya.addEventListener("click", ()=>{

    choixZendaya.style.border = "3px solid white";
    choixLiza.style.border = "0px solid black";
    choixDoja.style.border = "0px solid black";
    choixDuaLipa.style.border = "0px solid black";

    zendaya.style.visibility = "visible";
    liza.style.visibility = "hidden";
    doja.style.visibility = "hidden";
    duaLipa.style.visibility = "hidden";
})

choixLiza.addEventListener("click", ()=>{

    choixZendaya.style.border = "0px solid white";
    choixLiza.style.border = "3px solid white";
    choixDoja.style.border = "0px solid black";
    choixDuaLipa.style.border = "0px solid black";

    zendaya.style.visibility = "hidden";
    liza.style.visibility = "visible";
    doja.style.visibility = "hidden";
    duaLipa.style.visibility = "hidden";
})

choixDoja.addEventListener("click", ()=>{

    choixZendaya.style.border = "0px solid white";
    choixLiza.style.border = "0px solid black";
    choixDoja.style.border = "3px solid white";
    choixDuaLipa.style.border = "0px solid black";

    zendaya.style.visibility = "hidden";
    liza.style.visibility = "hidden";
    doja.style.visibility = "visible";
    duaLipa.style.visibility = "hidden";
})

choixDuaLipa.addEventListener("click", ()=>{

    choixZendaya.style.border = "0px solid white";
    choixLiza.style.border = "0px solid black";
    choixDoja.style.border = "0px solid black";
    choixDuaLipa.style.border = "3px solid white";

    zendaya.style.visibility = "hidden";
    liza.style.visibility = "hidden";
    doja.style.visibility = "hidden";
    duaLipa.style.visibility = "visible";
})

// choix du logo vogue
const vogueNoir = document.getElementById("vogue-noir");
const vogueBlanc = document.getElementById("vogue-blanc");

const vogueLogoRenduNoir = document.getElementById("logo-vogue-rendu-noir");
const vogueLogoRenduBlanc = document.getElementById("logo-vogue-rendu-blanc");

vogueNoir.addEventListener("click", () =>{
    vogueLogoRenduNoir.style.visibility = "visible";
    vogueLogoRenduBlanc.style.visibility = "hidden";

    vogueNoir.style.border = "3px solid white";
    vogueBlanc.style.border = "0px solid white";
})

vogueBlanc.addEventListener("click", () =>{
    vogueLogoRenduNoir.style.visibility = "hidden";
    vogueLogoRenduBlanc.style.visibility = "visible";

    vogueNoir.style.border = "0px solid white";
    vogueBlanc.style.border = "3px solid white";
})

// color picker

// Récupération de l'élément "color" et de l'objet à colorer
const colorPicker = document.getElementById("color-picker");
const coloredObject = document.getElementById("background-rendu");

// Ajout d'un écouteur d'événement pour détecter les changements de valeur
colorPicker.addEventListener("input", function() {
  // Récupération de la valeur sélectionnée
  const selectedColor = colorPicker.value;
  
  // Application de la couleur sélectionnée à l'objet
  coloredObject.style.backgroundColor = selectedColor;
});

//opacité du fond
const backgroundOpacity = document.getElementById("fond-opacite");

backgroundOpacity.addEventListener("input", function() {

    backgroundUn.style.opacity = backgroundOpacity.value;
    backgroundDeux.style.opacity = backgroundOpacity.value;
    backgroundTrois.style.opacity = backgroundOpacity.value;
    backgroundQuatre.style.opacity = backgroundOpacity.value;
})


//opacité de l'asset
const assetOpacity = document.getElementById("asset-opacite");

assetOpacity.addEventListener("input", function() {

    assetUn.style.opacity = assetOpacity.value;
    assetDeux.style.opacity = assetOpacity.value;
    assetTrois.style.opacity = assetOpacity.value;
    assetQuatre.style.opacity = assetOpacity.value;
})


// Entrer le texte sur l'affiche 
document.addEventListener('DOMContentLoaded', function(){

    var texteEntre = document.getElementById("entre-texte");
    var renduTexte = document.getElementById("titre-rendu");

    texteEntre.addEventListener('input', function(){
        var texteTape = texteEntre.value;
        renduTexte.innerHTML = texteTape;
    })
})

var renduTexte = document.getElementById("titre-rendu");

//transformation de la typo du texte
const boutonArial = document.getElementById("typo-arial");

boutonArial.addEventListener("click", ()=>{

    renduTexte.style.fontFamily = "Arial, sans-serif"; 
})

const boutonSuprema = document.getElementById("typo-suprema");

boutonSuprema.addEventListener("click", ()=>{

    renduTexte.style.fontFamily = "suprema-reg"; 
})

const boutonImpact = document.getElementById("typo-impact");

boutonImpact.addEventListener("click", ()=>{

    renduTexte.style.fontFamily = "impact"; 
})

const boutonAbhaya = document.getElementById("typo-abhaya");

boutonAbhaya.addEventListener("click", ()=>{

    renduTexte.style.fontFamily = "abhaya-reg"; 
})


// couleur du texte
const couleurTexte = document.getElementById("color-texte");

couleurTexte.addEventListener("input", function() {
    // Récupération de la valeur sélectionnée
    renduTexte.style.color = couleurTexte.value;})


// Uppercase du texte
const uppercaseTexte = document.getElementById("uppercase");

let uppercaseActif = false;

uppercaseTexte.addEventListener("click", function(){
    if (uppercaseActif){
        uppercaseActif = false;
        uppercaseTexte.style.backgroundColor = "rgba(0,0,0,0)";
        uppercaseTexte.style.color = "white";
        renduTexte.style.textTransform = "initial";
    }

    else {
        uppercaseActif = true;
        uppercaseTexte.style.backgroundColor = "white";
        uppercaseTexte.style.color = "#1f1f1f";
        renduTexte.style.textTransform = "uppercase";
    }
})

//taille du texte
const texteTaille = document.getElementById("texte-taille");

texteTaille.addEventListener("input", function(){
    renduTexte.style.fontSize = texteTaille.value + "px";
})

//Position du texte
const textePosition = document.getElementById("texte-position");

textePosition.addEventListener("input", function(){
    renduTexte.style.top = textePosition.value + "px";
})