var message = "hello homework3";
console.log(message);

function stringToInt(input) {
  var result = parseInt(input);
  return result; 
}

function maskNumber(input) {
  var mask_number = "";
  for(var i=0;i<input.length;i++){
    if(i>=input.length-4){
      mask_number = mask_number.concat("*");
      continue;
    }
    mask_number = mask_number.concat(input[i]);
  }
  return mask_number;
}

function getAverage(input_array) {
  var sum = 0;
  var index = 0;
  for( index=0; input_array[index]!= undefined; index++) {
    sum+= input_array[index];
  }
  var avg = sum/index;
  return avg;  
}

function isMultipleSeven(input) {
  return ((input % 7) == 0);
}

function operation(op,f,s) {
  var out;
  if(op=="add"){
    out = f+ s;
  }
  else if(op == "substract") {
    out = f -s;
  }
  else if(op == "multiply") {
    out = f *s;
  }
  else if(op == "divide") {
    out = f /s;
  }
  else{
    console.log("Not Supported");
  }
  return out;
}

function triangleMtn(n) {
  for( var i=0;i<n;i++){
      var star="";
    for( var j=0;j<=i;j++){
      star = star.concat("*");
    }
    console.log(star);
  }

}