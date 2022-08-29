Describe: beepBoop(); 

Test: "when entering number, it should display counting up to number by 1".
Code: beepBoop(10);
Expected Output: "0,1,2,3,4,5,6,7,8,9,10"

Test: "input 10, when the number 1 is listed, instead it will display the word beep"
Code: beepBoop(10);
Expected Output: "0,beep,2,3,4,5,6,7,8,9,beep"

Test: "input 13, when the number 2 is listed, instead it will display the word boop alongside changing 1's to beep"
Code: beeBoop(13);
Expected Output: "0,beep,boop,3,4,5,6,7,8,9,beep,beep,boop,beep"

Test: "input 13, when the number 3 is listed, instead it will display the sentence "Won't you be my neighbor?" alongside changing 1's and 2's"
Code: beepBoop(13);
Expected Output: "0,beep,boop,Won't you be my neighbor?,4,5,6,7,8,9,beep,beep,boop,Won't you be my neighbor?"

Test: "add spaces between all values in array upon output"
Code: beepBoop(10);
Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep"