// Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'red';
// var start = new Point(100, 100);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [100, 500]);

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = 'black';

// var myCircle2 = new Path.Circle(new Point(150, 90), 35);
// myCircle2.fillColor = 'red';

// for (var x = 0; x < 10; x++) {
//   var center = new Point(50 + x * 100, 100);
//   var path = new Path.Circle(center, 10);
//   path.fillColor = 'red';
//   path.strokeColor = 'black';
// }

for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    var row = y * 100;
    var center = new Point(50 + x * 100, row);
    var path = new Path.Circle(center, 10);
    path.fillColor = 'red';
    path.strokeColor = 'black';
  }
}

// Save a reference to the children array in a variable,
// so we don't end up with very long lines of code:
var children = project.activeLayer.children;

// Iterate through the items contained within the array:
for (var i = 0; i < children.length; i++) {
  var child = children[i];

  // Change the fill color of the child to a random
  // value between 0 and 360:
  child.fillColor.hue = Math.random() * 360;
}
