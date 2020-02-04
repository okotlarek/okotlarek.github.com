

//Waxing and waning circle animation + color change.
//Move mouse left+right to change hue, up+down to change saturation.

var dim = 8;
var count = 0;
var outer_diameter = 98; //percent of whole
var inner_diameter = 80; //percent of whole
var rate1 = 1.0;
var rate2 = 2.0;

var size, outer, inner;

function setup () {
    var myCanvas = createCanvas();
    createCanvas(800, 250);
    background(40);
    colorMode(HSB, 360, 100, 100);
    //noCursor();

  
    myCanvas.parent(mySketch);

    size = width / dim;
    outer = size * outer_diameter / 100;
    inner = size * inner_diameter / 100;
}

function draw () {

    var time = millis()/20.0;
    //System.out.println(time);
    noStroke();

    for (var i=0; i<dim; i++) {
        for (var j=0; j<dim; j++) {
        var x = size*i + size/2;
        var y = size*j + size/2;
        tile(x,y,time);
        }
    }
}

function keyPressed() {
    if (keyCode == ENTER) {
        saveFrame("####.tif");
    }
}

function tile (x, y, time) {
    strokeWeight(3);
    fill(0, 0, 87);
    ellipse(x, y, outer, outer);
    fill((mouseX*360/width), (mouseY*100/height), 58);
    //fill(179, 33, 58);
    ellipse(x, y, inner, inner);
    fill(0, 0, 15);
    var count = int (time/360);
    var t = time%360;
    //System.out.println(time);
    if (count%2 == 1) {
        arc(x, y, inner, inner, radians(-360+t*rate2), radians(t*rate1));//radians(t*rate1), radians(t*rate2-360));
    } else {
        arc(x, y, inner, inner, radians(t*rate1), radians((t*rate2)));
    }
}
