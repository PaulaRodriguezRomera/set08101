//SELECT HTML ELEMENTS AND STORE REFERENCES IN VARIABLES 

const quizContainer = document.getElementById('quiz'); 
const resultsContainer = document.getElementById('results'); 
const submitButton = document.getElementById('submit'); 


//FUNCTION TO BUILD THE QUIZ 
function buildQuiz(){}

//FUNCTION TO SHOW RESULTS 
function showResults(){}

//CALL BUILD FUNCTION 
buildQuiz(); 

//SHOW RESULTS ON CLICK 
submitButton.addEventListener('click', showResults); 

//QUESTIONS DISPLAY CREATED WITH OBJECTS AND ARRAYS 

const myQuestions = [
    {
        question: "Who invented JavaScript", 
        answers: {
            a: "Douglas Crockford", 
            b: "Sheryl Sandberg", 
            c: "Brendan Eich"
        }, 
        correctAnswer: "c"
    }, 
    {
        question: "Which one of these is a JavaScript package manager", 
        answers: {
            a: "Node.js", 
            b: "TypeScript", 
            c: "npm"
        }, 
        correctAnswer: "c"
    }, 
    {
        question: "Which tool can you use to ensure code quality", 
        answers: {
            a: "Angular", 
            b: "jQuery", 
            c: "JS", 
            d: "ESLint"
        }, 
        correctAnswer: "d"
    }, 
]; 