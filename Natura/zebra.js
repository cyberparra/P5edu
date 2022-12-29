/*
Progetto-sfida: manto della zebra con le forme
personalizzate.

ottobre-2021

Adriano Parracciani

*/

function setup() {
  createCanvas(400, 400);

  stroke(0);
  fill(0);
}

function draw() {
  background(250);
  
  //chiamo le funzioni inserendo due valori tra le etonde
  
  zebra(0, 0);
  zebra1(50, 0);
  zebra(100, 150);
  zebra1(150, -100);
  zebra2(200, 0);
  zebra2(250, 100);
  zebra(320, -50);
}

//ogni funzione si aspetta di ricevere due valori
// da utilizzare al suo interno
// in questo caso x,y 

// curveVertex() crea connessioni arrotondate

function zebra(x, y) {
  beginShape();
  curveVertex(20 + x, 0 + y);
  curveVertex(45 + x, 30 + y);
  curveVertex(30 + x, 100 + y);
  curveVertex(40 + x, 390 + y);
  curveVertex(20 + x, 380 + y);
  curveVertex(20 + x, 0 + y);
  endShape();
}

function zebra1(x, y) {
  beginShape();
  curveVertex(20 + x, 0 + y);
  curveVertex(20 + x, 380 + y);
  curveVertex(40 + x, 390 + y);
  curveVertex(45 + x, 30 + y);
  curveVertex(30 + x, 100 + y);
  curveVertex(20 + x, 0 + y);
  endShape();
}

function zebra2(x, y) {
  beginShape();
  curveVertex(35 + x, 0 + y);
  curveVertex(55 + x, 33 + y);
  curveVertex(65 + x, 120 + y);
  curveVertex(60 + x, 330 + y);
  curveVertex(24 + x, 380 + y);
  curveVertex(35 + x, 0 + y);
  endShape();
}
