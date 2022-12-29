var P=40;
var lT; //lato triangolo
var lQ; //lato quadrato
var lP; //lato pentagono
var lE; // lato esagono

var aT; //apotema triangolo
var aQ; //apotema quadrato
var aP; //apotema pentagono
var aE; // apotema esagono

var C=P;
var tx=100;
var ty=100;

function setup() {
	createCanvas(600, 600);
  textSize(20);
	
	//calcoli lunghezza dei lati
	lT=P/3; //lato triangolo
	lQ=P/4; //lato quadrato
	lP=P/5; //lato pentagono
	lE=P/6; // lato esagono
	
	//calcoli apotema  
	aT=lT*0.289; //apotema triangolo
	aQ=lQ*0.5; //apotema quadrato
	aP=lP*0.688; //apotema pentagono
	aE=lE*0.866; // apotema esagono
}

function draw() {
	background(220);
	
  text ("Perimetro= "+P,tx,ty-40);
	
  var AT=round(aT*P/2);
	text ("Area Triangolo= "+AT,tx,ty);
  
  var AQ=round(aQ*P/2);
	text ("Area Quadrato= "+AQ,tx,ty+40);
  
  var AP=round(aP*P/2);
	text ("Area Pentagono= "+AP,tx,ty+80);
  
  var AE=round(aE*P/2);
	text ("Area Esagono= "+AE,tx,ty+120);
  
  var R=C/(2*PI);
  var AC=round(PI*R*R);
  
  text ("Area Cerchio= "+AC,tx,ty+160);
	
	}
