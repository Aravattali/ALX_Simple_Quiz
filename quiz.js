// Define the checkAnswer function
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else if (userAnswer === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);