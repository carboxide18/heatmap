// パーリンノイズ生成の準備
const NOISE_VALUE = 20;
const CELL_SIZE = 5;
let zSeed = 0;

// Saturation（彩度）
const MAX_SATURATION = 100;
const MIN_SATURATION = 100;
let speedVal_sat = 0;
let addVal_sat = 1;

// Brightness（明度）
const MAX_BRIGHTNESS = 100;
const MIN_BRIGHTNESS = 100;
let speedVal_bright = 0;
let addVal_bright = 1;

function preload(){
  img = loadImage('assets/milano2.png');
  
}

function setup() {
  createCanvas(img.width, img.height);
  colorMode(HSB);
  background(255);
  noStroke();
  //img.resize(windowWidth, windowHeight);
  
}

function draw() {
  //image(img, 0, 0);
  image(img, 0, 0, height*img.width/img.height, height);


  for (let y = 0; y*CELL_SIZE < height;y++) {
    for (let x = 0; x*CELL_SIZE < width; x++){
      
      // 色相の設定
      let hueVal = noise(x/NOISE_VALUE, y/NOISE_VALUE, zSeed) * 480;
      
      fill(hueVal, speedVal_sat, speedVal_bright, 0.5);
      square(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE);
    }
  }
  zSeed += 0.0098;
  
  // 彩度の設定
  if(speedVal_sat <= MIN_SATURATION){
    addVal_sat = (addVal_sat * addVal_sat);
  }
  else if (speedVal_sat >= MAX_SATURATION){
    addVal_sat = -1 * (addVal_sat * addVal_sat);
  }
  
  speedVal_sat += addVal_sat;
  
  // 明度の設定
  if(speedVal_bright <= MIN_BRIGHTNESS){
    addVal_bright = (addVal_bright * addVal_bright); 
  }
  else if (speedVal_bright >= MAX_BRIGHTNESS){
    addVal_bright = -1 * (addVal_bright * addVal_bright);
  }
  
  speedVal_bright += addVal_bright;

}
