

function covertNumber(num) {
    let n = num/1000;
  if (num >= 1000) {
    let m = Math.round(n*10)/10;
    return m + "Km";
  } else if (num < 1000 && num != 0) {
    return num + "m";
  } else {
    return "";
  }
}

function showSolution() {
    var x = document.getElementById("myNumber").value;
    num = parseFloat(x);
    let G = covertNumber(num);
    document.getElementById("covertNumber").innerHTML = G;

}
