// Business Logic

function beepBoop(event) {
event.preventDefault();
const numb1Input = document.getElementById("numberInput").value;
let returnOut
let inputArray = [numb1Input];
let outputArray = [];
for (let i = 0; i <= numb1Input; i++) {
  console.log(i)
  outputArray.push([i]);
  console.log(outputArray);
  //console.log(parseint[i]);
 // if (numb1Input === 1) {
 //   returnOut = "beep"
  }
  document.getElementById("result").innerText = outputArray;
}
 // return returnOut;
//}

// UI Logic

//function formHandler(event) {
  //event.preventDefault();
  //const numb1Input = document.getElementById("numberInput").value;
  //beepBoop();
 // document.getElementById("result").innerText = returnOut;
//}

window.addEventListener("load", function() {
  document.getElementById("countUp").addEventListener("submit", beepBoop);
  console.log("page load function worked")
});