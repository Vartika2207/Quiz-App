const quizData = [
    {
        question:'1st Indian to land on moon?',
        a: 'Kalpana Chawla',
        b: 'Rajesh Kumar',
        c: 'Neeraj Chopra',
        d: 'C.V.Raman',
        correct: 'b'
    },
    {
        question:'1st Indian to win gold in Javeline?',
        a: 'Kalpana Chawla',
        b: 'Rajesh Kumar',
        c: 'Neeraj Chopra',
        d: 'C.V.Raman',
        correct: 'c'
    },
    {
        question:'1st lady President of India?',
        a: 'Pratibha Devi Singh',
        b: 'Sheela Dikshit',
        c: 'Indra Gandhi',
        d: 'Sarojini Naidu',
        correct: 'a'
    },
    {
        question:'Missile Man of India?',
        a: 'Bose',
        b: 'Ghandhi',
        c: 'Kalam',
        d: 'C.V.Raman',
        correct: 'b'
    },
    {
        question:'Which is client-side as well as server-side language?',
        a: 'C#',
        b: 'Python',
        c: 'JavaScript',
        d: 'Java',
        correct: 'c'
    }
]

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer'); 
const quiz = document.getElementById('quiz'); //remove
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
// let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=> {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } 
        else {
            if(score == 5)
               quiz.innerHTML = `<h2  style="text-align:center">Excellent!, Successfully completed with score ${score}</h2>`;
            else if(score >=3)
               quiz.innerHTML = `<h2  style="text-align:center">Good!, Successfully completed with score ${score}</h2>`;
            else
               quiz.innerHTML = `<h2  style="text-align:center">Try Again!, Successfully completed with score ${score}</h2>`;
            }
    }   
});
