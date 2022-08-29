// Business Logic

function beepBoop() {
const numb1Input = document.getElementById("numberInput").value;
let outputArray = [];
for (let i = 0; i <= numb1Input; i++) {
  let str = i.toString()
  if (str.includes("3")) {
    outputArray.push("Won't you be my neighbor?")
  } else if (str.includes("2")) {
    outputArray.push("boop")
  } else if (str.includes("1")) {
    outputArray.push("beep")
  } else {
    outputArray.push(i);
  }
  console.log(outputArray);
  };
  return outputArray
}

// UI Logic

function formHandler(event) {
  event.preventDefault();
  const numb1Input = document.getElementById("numberInput").value;
  document.getElementById("result").innerText = "";
  if (numb1Input === "") {
    document.getElementById("result").innerText = "We can't count nothing! Go ahead and put a number in!"
  } else {
    document.getElementById("result").innerText = beepBoop();
  }
}

window.addEventListener("load", function() {
  document.getElementById("countUp").addEventListener("submit", formHandler);
  console.log("page load function worked")
});