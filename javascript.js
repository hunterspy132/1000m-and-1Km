let num = parseFloat(prompt("Enter your Value"));

function makeKm(num) {
    let n = num/1000;
  if (num >= 1000) {
    let m = Math.round(n*10)/10;
    console.log(m + "km");
  } else if (num < 1000 && num != 0) {
    Math.round(num);
    console.log(num.toFixed() + "m");
  } else if(num = 0){
    console.log('');
  }else{
      console.log("need Number");
  }
}
makeKm(num);
