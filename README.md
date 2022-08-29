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

Test: "input 10, when the number 1 is listed, instead it will display the word beep"
Code: if (str.includes("1")) {
    outputArray.push("beep")
Expected Output: "0,beep,2,3,4,5,6,7,8,9,beep"

Test: "input 13, when the number 2 is listed, instead it will display the word boop alongside changing 1's to beep"
Code: if (str.includes("2")) {
  outputArray.push("boop")
} else if (str.includes("1")) {
  outputArray.push("beep")
}
Expected Output: "0,beep,boop,3,4,5,6,7,8,9,beep,beep,boop,beep"

Test: "input 13, when the number 3 is listed, instead it will display the sentence "Won't you be my neighbor?" alongside changing 1's and 2's"
Code: if (str.includes("3")) {
  outputArray.push("Won't you be my neighbor?")
} else if (str.includes("2")) {
  outputArray.push("boop") 
} else if (str.includes("1")) {
  outputArray.push("beep")
}
Expected Output: "0,beep,boop,Won't you be my neighbor?,4,5,6,7,8,9,beep,beep,boop,Won't you be my neighbor?"