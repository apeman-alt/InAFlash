const quizData = [
    {
        question: "(1) - What is the largest animal to have ever lived on earth.",
        a: "Your mom.",
        b: "The largest animal to have ever lived was the african elephant.",
        c: "Animals do not exist.",
        d: "The largest animal that ever lived on earth was the blue whale.",
        correct: "d",
    },
    {
        question: "(2) - What are the different types of animals?",
        a: "The two main types of animals are birds and fish.",
        b: "There are two main groups of animals, Vertebrates and Invertebrates.",
        c: "The two main types of animals are warm blooded and cold blooded.",
        d: "The two main types of animals are human and non-human.",
        correct: "b",
    },
    {
        question: "(3) - How do animals regulate their body temperature?",
        a: "Animals regulate their body temperature by changing their behavior and moving to a cooler environment.",
        b: "Animals use a thermometer to track their temperature.",
        c: "Animals hide in the water.",
        d: "Animals regulate body temperature by using air conditioning.",
        correct: "a",
    },
    {
        question: " (4) - What are the different types of cells of the human body.",
        a: "The two types of cells are red and blue.",
        b: "There are around 200 different cells in the human body.",
        c: "All cells are the same.",
        d: "Cells do not exist.",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
