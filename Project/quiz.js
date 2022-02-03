//FUNCTION TO BUILD THE QUIZ 
function buildQuiz(){

    //TO STORE THE HTML OUTPUT 
    const output = []; 

    //FOR EACH QUESTION 
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

           //TO STORE THE ANSWERS 
            const answers = []; 

            //FOR EACH AVAILABLE ANSWER 
            for(letter in currentQuestion.answers){

            //HTML RADIO BUTTON 
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }

     //ADD QUESTION AND ITS ANSWER TO THE OUTPUT 
     output.push(
         `<div class="question"> ${currentQuestion.question}</div> 
         <div class="answers"> ${answers.join('')}</div>`
     ); 
   }
);  
quizContainer.innerHTML = output.join(''); 
}

//FUNCTION TO SHOW RESULTS 
function showResults(){}

//SELECT HTML ELEMENTS AND STORE REFERENCES IN VARIABLES 

const quizContainer = document.getElementById('quiz'); 
const resultsContainer = document.getElementById('results'); 
const submitButton = document.getElementById('submit'); 

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