let imageFiles = [
  'Adam.jpg',
  'Albiona.jpg',
  'Alissa.jpg',
  'Avner.jpg',
  'Barbara.jpg',
  'Claire.jpg',
  'Diell.jpg',
  'Eman.jpg',
  'Feven.jpg',
  'Julie.jpg',
  'Ksenya.jpg',
  'Lara.jpg',
  'Maesha.jpg',
  'Maxence.jpg',
  'tanya.jpg',
  'Thea.jpg',
  'Yemalin.jpg',
];

let images = [];
let selectedImages = [];
let nInput ; //par défaut
let goButton;
let checkbox;

let maxPhotos = 1 ;//par défaut
let afficherNoms = false; //par défaut

//variables affichages
let imgWidth = 250;
let imgHeight = 300;
let margin = 20;
let textheight = 20;

function preload() {
  for (let i = 0; i < imageFiles.length; i++) {
    images[i] = [imageFiles[i].substring(0,imageFiles[i].lastIndexOf('.')),loadImage('data/' + imageFiles[i])];
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container'); 
  noLoop();
  textSize(textheight);
  fill("white");
      

  // Utilisation des éléments HTML
  nInput = select('#nInput');
  goButton = select('#goButton');
  checkbox = select('#checkbox');

  goButton.mousePressed(displayImages);
  checkbox.changed(changeAffichageNoms);


  randomiser();
  afficher();

}

function changeAffichageNoms(){
  afficherNoms = !afficherNoms;
  checkbox.checked(afficherNoms);
  afficher();
}

function displayImages() {
  maxPhotos = int(nInput.value());
  if (isNaN(maxPhotos) || maxPhotos <= 0) {
    alert('Veuillez entrer un nombre valide.');
    return;
  }
  if (maxPhotos > images.length) {
    maxPhotos = images.length;
    alert('Le nombre demandé dépasse le nombre d\'images disponibles. Affichage de toutes les images.');
  }
  randomiser();
  afficher();
}

function randomiser(){
  shuffle(images, true);

  selectedImages=[];
  for (let i = 0; i < maxPhotos; i++) {
    selectedImages.push(images[i]);
  }
}


function afficher() {
  


  background(0);

  let x = 10;
  let y = 50;
  
  

  for (let i = 0; i < selectedImages.length; i++) {
    image(selectedImages[i][1], x, y, imgWidth, imgHeight);
    if(afficherNoms){
      text(selectedImages[i][0], x, y+imgHeight+margin);
    }
    x += imgWidth + margin;
    if (x + imgWidth > width) {
      x = 10;
      y += imgHeight + margin ;
      if(afficherNoms){
        y += textheight + margin;
      }
    }
  }
}
