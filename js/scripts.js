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