// Business Logic

function beepBoop(e) {
let returnOut
const inputArray = [numb1Input]
for (i = 0; i <= 1; i++) {
  console.log(parseint[i]);
  if (numb1Input === 1) {
    result = "beep"
  }
}
  return result;
}

// UI Logic

function formHandler(event) {
  event.preventDefault();
  const numb1Input = document.getElementById("numberInput").value;
  document.getElementById("result").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("countUp").addEventListener("submit", formHandler);
  console.log("page load function worked")
});