document.write("Hello, world!");

function sayHello(){
  var response = prompt("whats your name?");
  alert("Hello" + response + ", have a nice day")
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,15));

function showTopic(){
  var x = document.getElementById('demo')
  x.style.fontsize = "25px"
  x.style.color = "pink"
}
