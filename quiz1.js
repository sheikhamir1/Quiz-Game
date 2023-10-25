// "use strict"

window.alert("We recommended User To Click The Play Button In The Bottom Of The Page 😉")

let questions = [{
    question: "Which of the following is a programming language?",   // 1
    answers: [
        { text: "Figma", correct: "false" },
        { text: "React", correct: "false" },
        { text: "R", correct: "true" },
        { text: "tailwind", correct: "false" }
    ]
},
{
    question: "Which programming paradigm emphasizes on writing code that is easy to read and maintain?",  // 2
    answers: [
        { text: "Procedural programming", correct: "false" },
        { text: "Object-oriented programming", correct: "true" },
        { text: "Functional programming", correct: "false" },
        { text: "Structured programming", correct: "false" }
    ]
},
{
    question: "Which data structure is used for storing a collection of elements in a non-linear fashion?",  // 3
    answers: [
        { text: "tree", correct: "true" },
        { text: "Stack", correct: "false" },
        { text: "array", correct: "false" },
        { text: "Queue", correct: "false" }
    ]
},
{
    question: "Which keyword is used for defining a function in most programming languages?",  // 4
    answers: [
        { text: "function", correct: "false" },
        { text: "def", correct: "true" },
        { text: "sub", correct: "false" },
        { text: "fun", correct: "false" }
    ]
},
{
    question: "Which of the following is not a valid variable name in most programming languages?", // 5
    answers: [
        { text: "myVariable", correct: "false" },
        { text: "123Variable", correct: "true" },
        { text: "_myVariable", correct: "false" },
        { text: "my_variable", correct: "false" }
    ]
},
{
    question: "Which of the following is not a data type in most programming languages?", // 6 
    answers: [
        { text: "Integer", correct: "false" },
        { text: "Float", correct: "false" },
        { text: "Double", correct: "true" },
        { text: "String", correct: "false" }
    ]
},
{
    question: "Which programming language is used for developing iOS apps?", // 7
    answers: [
        { text: "Java", correct: "false" },
        { text: "C#", correct: "false" },
        { text: "python", correct: "false" },
        { text: "Swift", correct: "true" }
    ]
},
{
    question: "Which of the following is not a relational operator in most programming languages?",  // 8 
    answers: [
        { text: "=", correct: "false" },
        { text: "==", correct: "false" },
        { text: "!=", correct: "false" },
        { text: "++", correct: "true" }
    ]
},
{
    question: "Which of the following is not a programming language?",  // 9 
    answers: [
        { text: "Ruby", correct: "false" },
        { text: "R", correct: "false" },
        { text: "MySQL", correct: "true" },
        { text: "JAVA", correct: "false" }
    ]
},
{
    question: "Which of the following is a type of web development framework?",  // 10
    answers: [
        { text: "Django", correct: "false" },
        { text: "react", correct: "false" },
        { text: "Angular", correct: "false" },
        { text: "All of the above", correct: "true" }
    ]
},
{
    question: "Which of the following hosting is most used ?",  // 11
    answers: [
        { text: "Shared hosting", correct: "true" },
        { text: "Dedicated hosting", correct: "false" },
        { text: "Virtual Private Server (VPS) hosting", correct: "false" },
        { text: "All of the above", correct: "false" }
    ]
},
{
    question: "Which of the following is not a data structure?",  // 12
    answers: [
        { text: "Stack", correct: "false" },
        { text: "Queue", correct: "false" },
        { text: "Function", correct: "true" },
        { text: "All of the above", correct: "false" }
    ]
},
{
    question: "Which programming paradigm emphasizes on writing code as a series of mathematical functions?",  // 13
    answers: [
        { text: "Procedural programming", correct: "false" },
        { text: "Object-oriented programming", correct: "false" },
        { text: "Functional programming", correct: "true" },
        { text: "Structured programming", correct: "false" }
    ]
},
{
    question: "Which of the following is not a commonly used programming language for web development?",  // 14
    answers: [
        { text: "Java", correct: "false" },
        { text: "Ruby", correct: "false" },
        { text: "Python", correct: "false" },
        { text: "Swift", correct: "true" }
    ]
},
{
    question: "Which of the following is most used programming language for backend web development?",  // 15
    answers: [
        { text: "Java", correct: "false" },
        { text: "Ruby", correct: "false" },
        { text: "Python", correct: "true" },
        { text: "Perl", correct: "false" }
    ]
},
{
    question: "What will be the output of the following code snippet? print(2**3 + (5 + 6)**(1 + 1))",  // 16
    answers: [
        { text: "129", correct: "true" },
        { text: "8", correct: "false" },
        { text: "121", correct: "false" },
        { text: "none", correct: "false" }
    ]
},
{
    question: "How is a code block indicated in Python?",  // 17
    answers: [
        { text: "brackets", correct: "false" },
        { text: "indentation", correct: "true" },
        { text: "key.", correct: "false" },
        { text: "none", correct: "false" }
    ]
},
{
    question: "When was Python released?",  // 18
    answers: [
        { text: "16 October 2001", correct: "false" },
        { text: "16 October 2000", correct: "true" },
        { text: "17 October 2000", correct: "false" },
        { text: "17 October 2001", correct: "false" }
    ]

},
{
    question: "What is Python?",  // 19
    answers: [
        { text: "A programming language", correct: "true" },
        { text: "Computer language", correct: "false" },
        { text: "Binary language", correct: "false" },
        { text: "None of the above", correct: "false" }
    ]
},
{
    question: "What does the name Python signify?",  // 20
    answers: [
        { text: "It is a snake", correct: "false" },
        { text: "It is very difficult to use", correct: "false" },
        { text: "Named after the British comedy group Monty Python", correct: "true" },
        { text: "None of the above", correct: "false" }
    ]
},
{
    question: "What is the type of programming language supported by Python?",  // 21
    answers: [
        { text: "Object-oriented", correct: "false" },
        { text: "Functional programming", correct: "false" },
        { text: "Structured programming", correct: "false" },
        { text: "all of the above", correct: "true" }
    ]
},
{
    question: "All the keywords in Python are in?",  // 22
    answers: [
        { text: "Lower case", correct: "false" },
        { text: "Upper case", correct: "false" },
        { text: "Capitalized", correct: "false" },
        { text: "None of the above", correct: "true" }
    ]
},
{
    question: "Which of the following definitions is the one for packages in Python?",  // 23
    answers: [
        { text: "A set of main modules", correct: "true" },
        { text: "A folder of python modules", correct: "false" },
        { text: "Set of programs making use of python modules", correct: "false" },
        { text: "Number of files containing python definitions and statements", correct: "false" }
    ]
},
{
    question: "Which type of JavaScript language is ?",  // 24
    answers: [
        { text: "Object-Oriented", correct: "false" },
        { text: "Object-Based", correct: "true" },
        { text: "Assembly-language", correct: "false" },
        { text: "High-level", correct: "false" }
    ]
},
{
    question: "Which one of the following also known as Conditional Expression?",  // 25
    answers: [
        { text: "Alternative to if-else", correct: "false" },
        { text: "Switch statement", correct: "false" },
        { text: "If-then-else statement", correct: "false" },
        { text: "immediate if", correct: "true" }
    ]
},
{
    question: "When interpreter encounters an empty statements, what it will do?",  // 26
    answers: [
        { text: "Shows a warning", correct: "false" },
        { text: "Prompts to complete the statement", correct: "false" },
        { text: "Throws an error", correct: "false" },
        { text: "Ignores the statements", correct: "true" }
    ]
},
{
    question: 'The "function" and " var" are known as?',  // 27
    answers: [
        { text: "Keywords", correct: "false" },
        { text: "Data types", correct: "false" },
        { text: "Declaration statements", correct: "true" },
        { text: "Prototypes", correct: "false" }
    ]
},
{
    question: "JavaScript is the programming language of the ?",  // 28
    answers: [
        { text: "Desktop", correct: "false" },
        { text: "Mobile", correct: "false" },
        { text: "Web", correct: "true" },
        { text: "Server", correct: "false" }
    ]
},
{
    question: "What is C++?",  // 29
    answers: [
        { text: "C++ is an object oriented programming language", correct: "false" },
        { text: "C++ is a procedural programming language", correct: "false" },
        { text: "C++ supports both procedural and object oriented programming language", correct: "true" },
        { text: "C++ is a functional programming language", correct: "false" }
    ]
},
{
    question: "Which of the following is the correct syntax of including a user defined header files in C++?",  // 30
    answers: [
        { text: "#include [userdefined]", correct: "false" },
        { text: "#include “userdefined”", correct: "true" },
        { text: "#include <userdefined.h>", correct: "false" },
        { text: "#include <userdefined>", correct: "false" }
    ]
},
{
    question: "Which of the following is used for comments in C++?",  // 31
    answers: [
        { text: " /* comment */", correct: "false" },
        { text: "// comment */", correct: "false" },
        { text: "// comment", correct: "false" },
        { text: "both // comment or /* comment */", correct: "true" }
    ]
},
{
    question: "Which of the following is a correct identifier in C++?",  // 32
    answers: [
        { text: "VAR_1234", correct: "true" },
        { text: "$var_name", correct: "false" },
        { text: "7VARNAME", correct: "false" },
        { text: "7var_name", correct: "false" }
    ]
},
{
    question: "JDK stands for ?",  // 33
    answers: [
        { text: "Java deployment kit", correct: "false" },
        { text: "JavaScript deployment kit", correct: "false" },
        { text: "Java development kit", correct: "true" },
        { text: "None of these", correct: "false" }
    ]
},
{
    question: "What makes the Java platform independent?",  // 34
    answers: [
        { text: "Advanced programming language", correct: "false" },
        { text: "It uses bytecode for execution", correct: "true" },
        { text: "Class compilation", correct: "false" },
        { text: "All of these", correct: "false" }
    ]
},
{
    question: "What are the types of memory allocated in memory in java?",  // 35
    answers: [
        { text: "Heap memory", correct: "false" },
        { text: "Stack memory", correct: "false" },
        { text: "Both Heap And Stack memory", correct: "true" },
        { text: "None of these", correct: "false" }
    ]
},
{
    question: "Multiline comment is created using in java ?",  // 36
    answers: [
        { text: "//(like this)", correct: "false" },
        { text: "/**/(like this)", correct: "true" },
        { text: "||(like this)", correct: "false" },
        { text: "all of these", correct: "false" }
    ]
},
{
    question: "What is the entry point of a program in Java?",  // 37
    answers: [
        { text: "main() method", correct: "true" },
        { text: "The first line of code", correct: "false" },
        { text: "Last line of code", correct: "false" },
        { text: "main class", correct: "false" }
    ]
},
{
    question: "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.?",  // 38
    answers: [
        { text: 'new', correct: "true" },
        { text: 'new malloc', correct: "false" },
        { text: 'alloc', correct: "false" },
        { text: 'malloc', correct: "false" }
    ]
},
{
    question: "Which is not a property of attribute Behaviour of (Marquee) tag?",  // 39
    answers: [
        { text: 'alternate', correct: "false" },
        { text: 'blur', correct: "true" },
        { text: 'scroll', correct: "false" },
        { text: 'slide', correct: "false" }
    ]
},
{
    question: "which keyword is used to declare variables in javascript ?",  // 40
    answers: [
        { text: 'Var', correct: "true" },
        { text: 'Dim', correct: "false" },
        { text: 'String', correct: "false" },
        { text: 'int', correct: "false" }
    ]
},
{
    question: "The probability of getting a spade card from a well shuffled deck of 52 cards is",  // 41
    answers: [
        { text: '1/13', correct: "false" },
        { text: '1/4', correct: "true" },
        { text: '12/13', correct: "false" },
        { text: '3/4', correct: "false" }
    ]
},
{
    question: "The total number of events of throwing 10 coins simultaneously is?",  // 42
    answers: [
        { text: '1024', correct: "true" },
        { text: '512', correct: "false" },
        { text: '100', correct: "false" },
        { text: '10', correct: "false" }
    ]
},
{
    question: "The shadow of a tower is equal to its height at 10-45 a.m. The sun’s altitude is",  // 43
    answers: [
        { text: '30°', correct: "false" },
        { text: '45°', correct: "true" },
        { text: '60°', correct: "false" },
        { text: '90°', correct: "false" }
    ]
},
{
    question: "One of the methods for determining mode is?",  // 44
    answers: [
        { text: 'Mode = 2 Median -3 Mean', correct: "false" },
        { text: 'Mode = 3 Median – 2 Mean', correct: "true" },
        { text: 'Mode = 2 Mean – 3 Median', correct: "false" },
        { text: 'Mode = 3 Mean – 2 Median', correct: "false" }
    ]
},
{
    question: "The distance between the point P(1, 4) and Q(4, 0) is ?",  // 45
    answers: [
        { text: '4', correct: "false" },
        { text: '5', correct: "true" },
        { text: '6', correct: "false" },
        { text: ' 3√3', correct: "false" }
    ]
},
{
    question: "The area of the triangle ABC with the vertices A(-5, 7), B(-4, -5) and C(4, 5) is ?",  // 46
    answers: [
        { text: '63', correct: "false" },
        { text: '35', correct: "false" },
        { text: '53', correct: "true" },
        { text: '36', correct: "false" }
    ]
},
{
    question: "Who was first women Hafiz-e-Quran?",  // 47
    answers: [
        { text: 'Umal Mumneen Hazrat Hafsa (R.A)', correct: "true" },
        { text: 'Umal Mumneen Hazrat Aysha (R.A)', correct: "false" },
        { text: 'Umal Mumneen Hazrat Zainab (R.A)', correct: "false" },
        { text: 'none', correct: "false" }
    ]
},
{
    question: "Which Surah of the Holy Quran Hajj is commanded?",  // 48
    answers: [
        { text: 'Al-Imran', correct: "false" },
        { text: 'Al-Baqrah', correct: "true" },
        { text: 'Al-Rehman', correct: "false" },
        { text: 'Fatir', correct: "false" }
    ]
},
{
    question: "In which Surah of the Holy Quran Fasting is commanded?",  // 49
    answers: [
        { text: 'Yousaf', correct: "false" },
        { text: 'Al-Baqrah', correct: "true" },
        { text: 'Yaseen', correct: "false" },
        { text: 'Al-Nisa', correct: "false" }
    ]
},
{
    question: "In which Surah the of Holy Quran there is mention of Zulqarnain?",  // 50
    answers: [
        { text: "A'ssuff", correct: "false" },
        { text: 'Al Mujadala', correct: "false" },
        { text: ' Alkahaf', correct: "true" },
        { text: 'Yusuf', correct: "false" }
    ]
},
]


let user_input = document.getElementById("userinput");
document.getElementById("btn").onclick = function () {
    if (user_input.value === "PLAY") {
        document.getElementById("General").style.display = "block"
        document.getElementById("main").style.display = "none"
        startquiz()
    }
}


let = questionElement = document.getElementById("Questions");
let = answerButtons = document.getElementById("alloption");
let = nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next"
    showquestion()
}

function showquestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let question_no = currentQuestionIndex + 1;
    questionElement.innerHTML = question_no + ": " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        console.log("correct");
        selectedBtn.style.backgroundColor = "green"
        score++;
    } else {
        console.log("wrong");
        selectedBtn.style.backgroundColor = "red"

    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display = "block"
}


function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
}


function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showquestion()
    } else {
        showScore()
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startquiz();
        nextButton.style.display = "none";
    }
})

startquiz()


