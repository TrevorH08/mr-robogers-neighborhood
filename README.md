# _Mr Roboger's Neighborhood_

#### By _Trevor Hunter_

#### _This is for my third project at Epicodus, covering arrays and looping. This webpage will take a users input, count up to that number, and replace all numbers that include a 1 with 'beep', 2 with 'boop' and 3 with 'Won't you be my neighbor?'._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_On this webpage, a user will be prompted to input a number of their choosing. Upon entering a number, it will count up to their number by increments of one. Along the way, it will replace any number that includes the numbers 1, 2, or 3. Numbers including 1's will be replaced with 'beep', 2's will be replaced with 'boop', and 3's replaced with 'Won't you be my neighbor?'. The heirarchy here is 3, 2, then 1. So the number 13 for example would display as 'Won't you be my neighbor?', and won't show 'beep'. For the number 123, it will still only display 'Won't you be my neighbor?' in it's place as it takes precedence over the others._

## Setup/Installation Requirements

* _Clone from GitHub at:https://github.com/TrevorH08/mr-robogers-neighborhood ._
* _Navigate to the "mr-robogers-neighborhood" folder_
* _Double click index.html to open a locally hosted instance_
* _Enter a number to see how it works_
* _TO EDIT: Open folder using text editor of your choice_


## TESTS

* _Describe: beepBoop();_

* _Test: "when entering number, it should display counting up to number by 1"._
_Code: beepBoop(10);_
_Expected Output: "0,1,2,3,4,5,6,7,8,9,10"_

* _Test: "input 10, when the number 1 is listed, instead it will display the word 'beep'"_
_Code: beepBoop(10);_
_Expected Output: "0,beep,2,3,4,5,6,7,8,9,beep"_

* _Test: "input 13, when the number 2 is listed, instead it will display the word 'boop', alongside changing 1's to 'beep'"_
_Code: beeBoop(13);_
_Expected Output: "0,beep,boop,3,4,5,6,7,8,9,beep,beep,boop,beep"_

* _Test: "input 13, when the number 3 is listed, instead it will display the sentence 'Won't you be my neighbor?' alongside changing 1's to 'beep' and 2's to 'boop'"_
_Code: beepBoop(13);_
_Expected Output: "0,beep,boop,Won't you be my neighbor?,4,5,6,7,8,9,beep,beep,boop,Won't you be my neighbor?"_

* _Test: "add spaces between all values in array upon output"_
_Code: beepBoop(10);_
_Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep"_



## Known Bugs

* _No known bugs_

## License

MIT

_If you have any questions or issues, head over to this projects GitHub Repository, and navigate to the "Issues" tab to leave feedback! If you have any suggestions or would like to contribute to this project, reach out and let me know!_

Copyright (c) _08/28/22_ _Trevor Hunter_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.