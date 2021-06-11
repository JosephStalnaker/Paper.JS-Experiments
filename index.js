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

// for (var x = 0; x < 10; x++) {
//   for (var y = 0; y < 10; y++) {
//     var row = y * 100;
//     var center = new Point(50 + x * 100, row);
//     var path = new Path.Circle(center, 10);
//     path.fillColor = 'red';
//     path.strokeColor = 'black';
//   }
// }

// // Save a reference to the children array in a variable,
// // so we don't end up with very long lines of code:
// var children = project.activeLayer.children;

// // Iterate through the items contained within the array:
// for (var i = 0; i < children.length; i++) {
//   var child = children[i];

//   // Change the fill color of the child to a random
//   // value between 0 and 360:
//   child.fillColor.hue = Math.random() * 360;
// }

var path = new Path.Rectangle({
  point: [75, 75],
  size: [75, 75],
  strokeColor: 'red',
});

var path2 = new Path.Rectangle({
  point: [150, 150],
  size: [35, 35],
  strokeColor: 'red',
});

// function onFrame(event) {
//   // Each frame, rotate the path by 3 degrees:
//   path.rotate(3);
//   path2.rotate(1);

var text = new PointText(new Point(100, 100));
text.content = 'COLLECTed';
text.opacity = 0.5;
text.strokeColor = 'red';
text.fillColor = 'white';
text.fontSize = 40;

var text3 = new PointText(new Point(358, 358));
text3.content = 'COLLECTed';
text3.strokeColor = '#C0C0C0';
text3.strokeWidth = 1;
text3.fillColor = 'white';
text3.fontSize = 85;

var text = new PointText(new Point(359, 359));
text.content = 'COLLECTed';
text.strokeColor = '#757575';
text3.strokeWidth = 2;
text.fillColor = 'white';
text.fontSize = 84;

var text2 = new PointText(new Point(360, 360));
text2.content = 'COLLECTed';
text2.strokeColor = 'black';
text2.strokeWidth = 2;
text2.fillColor = 'white';
text2.fontSize = 83;

function onFrame(event) {
  text.rotate(1);
  //   if (text.opacity < 1) {
  //     text.opacity += 0.2;
  //   }
  // Each frame, rotate the path by 3 degrees:
  path.rotate(3);
  path2.rotate(1);
  text2.rotate(1);
  text3.rotate(1);
}

function onKeyDown(event) {
  var text = new PointText();
}
