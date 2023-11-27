const questions = [
    { question: "1. Como você se sente em relação a trabalhar em grupo?", options: ["Gosto muito", "Mais ou menos", "Não gosto"] },
    { question: "2. Qual área você tem mais interesse?", options: ["Humanas", "Exatas", "Biológicas"] },
    { question: "3. Qual atividade você prefere?", options: ["Criar algo novo", "Analisar dados", "Lidar com pessoas"] },
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let answers = [];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');

function displayQuestion() {
    const currentQues = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h3>${currentQues.question}</h3>
        <label><input type="radio" name="answer" value="0">${currentQues.options[0]}</label><br>
        <label><input type="radio" name="answer" value="1">${currentQues.options[1]}</label><br>
        <label><input type="radio" name="answer" value="2">${currentQues.options[2]}</label><br>
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Por favor, selecione uma opção.');
        return;
    }

    answers.push(parseInt(selectedAnswer.value));

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalScores = [0, 0, 0]; // Inicializa os pontos para cada categoria
    answers.forEach((answer, index) => {
        totalScores[answer] += index + 1;
    });

    const maxScoreIndex = totalScores.indexOf(Math.max(...totalScores));

    // Mapeie o índice de pontuação máxima para a profissão correspondente
    const professions = ["Profissão 1", "Profissão 2", "Profissão 3"];
    const result = professions[maxScoreIndex];

    // Exiba o resultado
    resultText.innerHTML = `Com base nas suas respostas, a profissão que mais se adequa a você é: <strong>${result}</strong>.`;
    resultContainer.style.display = 'block';
    quizContainer.style.display = 'none';
}

// Inicializa o quiz
displayQuestion();