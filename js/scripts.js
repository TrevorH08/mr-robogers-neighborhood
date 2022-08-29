// Business Logic

function beepBoop(event) {
event.preventDefault();
const numb1Input = document.getElementById("numberInput").value;
//let returnOut
//let inputArray = [numb1Input];
let outputArray = [];
for (let i = 0; i <= numb1Input; i++) {
  console.log(i)
  let str = i.toString()
  if (str.includes("1")) {
    outputArray.push("beep")
    console.log(i)
  // } else if (str.includes("1")) {
  //   outputArray.push("beep")
  //}
  } else {
    outputArray.push(i);
  }
  console.log(outputArray);
  // if (outputArray === 1) {
  //   outputArray === "beep"
  // }
  // outputArray.forEach(number =>{
  //   1 === "beep"; 2 === "boop"; 3 === "Won't you be my neighbor?"
  // });

  //if above doesn't work, try temporary variables

  
  //console.log(parseint[i]);
 // if (numb1Input === 1) {
 //   returnOut = "beep"
  }
}
  //document.getElementById("result").innerText = outputArray;

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