// =================================================================
// Part 1: JavaScript & CSS Keyframe Animation Interaction
// =================================================================

// Scoped to this part of the script.
const toggleButton = document.getElementById('toggle-animation');
const loader = document.querySelector('.loader');

// Global variable to track the animation state.
let isAnimating = false; 

// Event listener to trigger the animation.
toggleButton.addEventListener('click', () => {
    // Toggles the `isAnimating` boolean.
    isAnimating = !isAnimating;

    // Use a conditional to manage the animation state.
    if (isAnimating) {
        // Adds the 'active' class to start the animation (defined in CSS).
        loader.classList.add('active');
        toggleButton.textContent = "Stop Animation";
    } else {
        // Removes the 'active' class to stop the animation.
        loader.classList.remove('active');
        toggleButton.textContent = "Start Animation";
    }
});

// =================================================================
// Part 2: JavaScript Functions, Parameters, and Return Values
// =================================================================

// Function to calculate the square of a number.
// @param {number} num - The number to be squared.
// @returns {number} The square of the input number.
function calculateSquare(num) {
    // This is a simple function that takes a parameter and returns a value.
    // The variable 'squaredValue' is scoped only to this function.
    const squaredValue = num * num; 
    return squaredValue;
}

// Function to display the result on the page.
// @param {number} result - The result to be displayed.
function displayResult(result) {
    // A function that handles DOM manipulation.
    // It is called with a parameter from outside its scope.
    const resultOutputDiv = document.getElementById('result-output');
    resultOutputDiv.textContent = `The square is: ${result}`;
}

// =================================================================
// Part 3: Event Triggering & Integration
// =================================================================

// Scoped to this part of the script.
const calculateButton = document.getElementById('calculate-button');
const numberInput = document.getElementById('number-input');

// Event listener for the calculation button.
calculateButton.addEventListener('click', () => {
    // Get the value from the input field.
    // The `parseFloat` function ensures the input is a number.
    const inputValue = parseFloat(numberInput.value);

    // Conditional to check if the input is a valid number.
    if (!isNaN(inputValue)) {
        // Call the `calculateSquare` function, passing the input value as a parameter.
        // The return value is stored in the `result` variable.
        const result = calculateSquare(inputValue);

        // Call the `displayResult` function, passing the returned result as a parameter.
        displayResult(result);
    } else {
        // If the input is not a number, provide user feedback.
        const resultOutputDiv = document.getElementById('result-output');
        resultOutputDiv.textContent = "Please enter a valid number.";
    }
});
