// Business Logic

function beepBoop(e) {
let returnOut
const inputArray = [numb1Input]
for (i = 0; i <= 1; i += 1) {
  console.log(parseint[i]);
  if (numb1Input === 1) {
    returnOut = "beep"
  }
}
  return returnOut;
}

// UI Logic

function formHandler(event) {
  event.preventDefault();
  const numb1Input = document.getElementById("numberInput").value;
  document.getElementById("result").innerText = numb1Input;
}

window.addEventListener("load", function() {
  document.getElementById("countUp").addEventListener("submit", formHandler);
  console.log("page load function worked")
});