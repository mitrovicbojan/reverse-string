const strInput = document.getElementById("inputString");
const btn = document.getElementById("btn");
const reverse = document.getElementById("reverse");

btn.addEventListener("click", function () {
  let newStr = strInput.value;
  let revStr = "";
  for (let i = 0; i <= newStr.length - 1; i++) {
    revStr = newStr[i] + revStr;
  }
  return (reverse.innerHTML = revStr);
});
