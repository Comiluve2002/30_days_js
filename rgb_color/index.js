
  function rgbToHex() {

    var r=document.getElementById("red").value;
    var g=document.getElementById("green").value;
    var b=document.getElementById("blue").value;

    console.log(r, g, b);
    if(r < 0 || r > 255) alert("r is out of bounds; "+r);
    if(g < 0 || g > 255) alert("g is out of bounds; "+g);
    if(b < 0 || b > 255) alert("b is out of bounds; "+b);

   var red = singleRGBToHex(r)
  var green = singleRGBToHex(g)
  var blue = singleRGBToHex(b)

  var hex = '#' + red + green + blue

  document.body.style.backgroundColor = hex
  document.getElementById('show').innerHTML = hex

  console.log('hex: ', hex)
}

var singleRGBToHex = function (rgb) {
  var hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
  return hex
}



  
  
  

  
