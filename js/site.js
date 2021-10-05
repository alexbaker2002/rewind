
// Main Function
function getString(){

// get input
let str = document.getElementById("userString").value;

//validation
str.length > 1 ? null : Swal.fire("Rewind cannot reverse only 1 character.");

// func to reverse string
let reversedStr = reverseString(str);

//func to display string in UI
displayString(reversedStr);

}

// reverse the string
function reverseString(str){

// declare new string
  let reversedStr = "";

  let start = str.length-1
  let end = 0

// concat an new string with char in reverse
  for (let i = start; i >= end; i--) {
  reversedStr += str[i];
  }

  return reversedStr;
}

//display the screen inside the html
function displayString(reversedStr) {

// declare the element
let output = document.getElementById("results");

//output to innerHTML
output.innerHTML = reversedStr;
output.style.display = "block";
}