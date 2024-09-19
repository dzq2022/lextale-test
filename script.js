// Initialize EmailJS with your user ID
(function() {
    emailjs.init("D-chfV9FgKTiw4tNw"); // Replace YOUR_USER_ID with your actual EmailJS user ID
})();

const englishWords = [
    {word: "platery", correct: false}, {word: "denial", correct: true}, 
    // ... (include all English words here)
];

const spanishWords = [
    {word: "terzo", correct: false}, {word: "pellizcar", correct: true}, 
    // ... (include all Spanish words here)
];

let currentWords = [];
let currentIndex = 0;
let score = 0;
let userInfo = {};

document.getElementById('englishButton').addEventListener('click', function() {
    userInfo.language = 'english';
    showUserForm();
});

document.getElementById('spanishButton').addEventListener('click', function() {
    userInfo.language = 'spanish';
    showUserForm();
});

function showUserForm() {
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('userForm').style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    userInfo.name = document.getElementById('name').value;
    userInfo.email = document.getElementById('email').value;
    
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('instructionsArea').style.display = 'block';
    document.getElementById(userInfo.language + 'Instructions').style.display = 'block';
});

document.getElementById('startTest').addEventListener('click', function() {
    document.getElementById('instructionsArea').style.display = 'none';
    document.getElementById('testArea').style.display = 'block';
    initializeTest(userInfo.language);
});

function initializeTest(language) {
    currentWords = language === 'english' ? englishWords : spanishWords;
    shuffleArray(currentWords);
    currentIndex = 0;
    score = 0;
    displayWord();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayWord() {
    if (currentIndex < currentWords.length) {
        document.getElementById('wordContainer').textContent = currentWords[currentIndex].word;
    } else {
        finishTest();
    }
}

function checkWord(isWord) {
    if (isWord === currentWords[currentIndex].correct) {
        score++;
    }
    currentIndex++;
    displayWord();
}

function finishTest() {
    document.getElementById('testArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    
    const finalScore = `${score}/${currentWords.length}`;
    
    // Send email with the score
    emailjs.send("default_service", "template_a0px7te", {
        to_email: userInfo.email,
        name: userInfo.name,
        language: userInfo.language,
        score: finalScore
    }).then(function(response) {
        console.log('Email sent successfully:', response);
    }, function(error) {
        console.log('Failed to send email:', error);
    });
}

document.getElementById('yesButton').addEventListener('click', () => checkWord(true));
document.getElementById('noButton').addEventListener('click', () => checkWord(false));
