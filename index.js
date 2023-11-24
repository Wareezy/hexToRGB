//  Function to convert hex code to RGB
let buttonCalc=document.querySelector('[data-calc]')

function convertHexToRgb() {
// Convert hex string to array of characters
let hexInput = document.querySelector('[data-input]');
 let rgbOutput = document.querySelector('[data-input2]');
 let hexCode = hexInput.value;

// this line of code bascially takes the hex code which was retieved from the input field and it splits the input

let hexArray = hexCode.split('');

// Remove the '#' symbol is responsible for removing the # function
hexArray.shift();

// Join the array back into a string
 let hexWithoutHash = hexArray.join('');

// this code creates an array which will have 3 elements
let [red, green, blue] = [
 hexWithoutHash.slice(0, 2),
 hexWithoutHash.slice(2, 4),
 hexWithoutHash.slice(4, 6)
 ].map(component => parseInt(component, 16));
 
rgbOutput.value = `rgb(${red}, ${green}, ${blue})`;
}
// this button is responsible for when the button is clicked that it will run through the function which is "convertHexToRgb"
 buttonCalc.addEventListener('click',convertHexToRgb)