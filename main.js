img = "";
status = "";

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function preload(){
  img = loadimage('bed_room.jpeg');
  img = loadimage('fruit.jpeg');
  img = loadimage('tv.jpeg');
  img = loadimage('hall.jpeg');
  img = loadimage('kitchen.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Bed_Room", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Fruits", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("TV", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Hall", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Kitchen", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

