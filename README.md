Describe: beepBoop(); 

Test: "when entering number, it should display counting up to number by 1".
Code: 
let inputArray = [numb1Input];
let outputArray = [];
for (let i = 0; i <= numb1Input; i++) {
  outputArray.push(i);
  }
  document.getElementById("result").innerText = outputArray;
Expected Output: "0,1,2,3,4,5,6,7,8,9,10"

Test: "when the number 1 is listed, instead it will display the word beep"
Code: 
Expected Output: "0,beep,2,3,4,5,6,7,8,9,beep"