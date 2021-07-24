
const w = 1600
const h = 1200
const scale = 20
const cols = w / scale
const rows = h / scale
const terrain = []
var flying = 0

function setup() {
  createCanvas(600, 600, WEBGL);  
}

function draw() {  
  flying -= 0.1
  
  var yOff = flying
  for (var x = 0; x < cols; x++)
    {
      var xOff = 0
      terrain[x] = []
      for (var y = 0; y < rows; y++)
        {
          terrain[x][y] = map(noise(xOff, yOff), 0, 1, -50, 50)
          yOff += 0.2
        }
      xOff += 0.2
    }
  
  background(0);
  stroke(255)
  noFill()
  translate(width/2, height/2 - 200)
  rotateX(PI/3)
  translate(-w/2, -h/2)
  frameRate(30)
  
  for (var y = 0; y < rows - 1; y++)
    {
      beginShape(TRIANGLE_STRIP)
      for (var x = 0; x < cols; x++)
        {
          vertex(x * scale - 300, y * scale - 300, terrain[x][y])
          vertex(x * scale - 300, (y + 1) * scale - 300, terrain[x][y+1])
        }
      endShape()
    }
}