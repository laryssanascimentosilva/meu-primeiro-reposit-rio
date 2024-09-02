let xBolinha = 300;
let yBolinha = 200;
let diametro =25;
let raio = diametro /2;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
function setup() {
createCanvas(600, 400);
}
function draw() {
background(115);
mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
function mostraBolinha() {
circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
if (xBolinha > width || xBolinha < 0) {
velocidadeXBolinha *= -1;
}
if (yBolinha > height || yBolinha < 0) {
velocidadeYBolinha *= -1;
}
}
}