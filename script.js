function fn1(){
  var str = document.getElementById("color").value;
  console.log (str);
  document.getElementById("answer").textContent = "Favorite color is " +str;
}