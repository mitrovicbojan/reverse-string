const strInput = document.getElementById("inputString");
const btn = document.getElementById("btn");
const reverse = document.getElementById("reverse");
btn.addEventListener("click", function () {
  console.log("hello");
  reverse.innerHTML = strInput.value;
});
