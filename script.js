// Initialize EmailJS with your user ID
(function() {
    emailjs.init("D-chfV9FgKTiw4tNw"); // Replace D-chfV9FgKTiw4tNw with your actual EmailJS user ID
})();

const englishWords = [
    {word: "platery", correct: false}, {word: "denial", correct: true}, {word: "generic", correct: true},
    {word: "mensible", correct: false}, {word: "scornful", correct: true}, {word: "stoutly", correct: true},
    {word: "ablaze", correct: true}, {word: "kermshaw", correct: false}, {word: "moonlit", correct: true},
    {word: "lofty", correct: true}, {word: "hurricane", correct: true}, {word: "flaw", correct: true},
    {word: "alberation", correct: false}, {word: "unkempt", correct: true}, {word: "breeding", correct: true},
    {word: "festivity", correct: true}, {word: "screech", correct: true}, {word: "savoury", correct: true},
    {word: "plaudate", correct: false}, {word: "shin", correct: true}, {word: "fluid", correct: true},
    {word: "spaunch", correct: false}, {word: "allied", correct: true}, {word: "slain", correct: true},
    {word: "recipient", correct: true}, {word: "exprate", correct: false}, {word: "eloquence", correct: true},
    {word: "cleanliness", correct: true}, {word: "dispatch", correct: true}, {word: "rebondicate", correct: false},
    {word: "ingenious", correct: true}, {word: "bewitch", correct: true}, {word: "skave", correct: false},
    {word: "plaintively", correct: true}, {word: "kilp", correct: false}, {word: "interfate", correct: false},
    {word: "hasty", correct: true}, {word: "lengthy", correct: true}, {word: "fray", correct: true},
    {word: "crumper", correct: false}, {word: "upkeep", correct: true}, {word: "majestic", correct: true},
    {word: "magrity", correct: false}, {word: "nourishment", correct: true}, {word: "abergy", correct: false},
    {word: "proom", correct: false}, {word: "turmoil", correct: true}, {word: "carbohydrate", correct: true},
    {word: "scholar", correct: true}, {word: "turtle", correct: true}, {word: "fellick", correct: false},
    {word: "destription", correct: false}, {word: "cylinder", correct: true}, {word: "censorship", correct: true},
    {word: "celestial", correct: true}, {word: "rascal", correct: true}, {word: "purrage", correct: false},
    {word: "pulsh", correct: false}, {word: "muddy", correct: true}, {word: "quirty", correct: false},
    {word: "pudour", correct: false}, {word: "listless", correct: true}, {word: "wrought", correct: true}
];

const spanishWords = [
    {word: "terzo", correct: false}, {word: "pellizcar", correct: true}, {word: "pulmones", correct: true},
    {word: "batillón", correct: false}, {word: "zapato", correct: true}, {word: "tergiversar", correct: true},
    {word: "pésimo", correct: true}, {word: "cadeña", correct: false}, {word: "hacha", correct: true},
    {word: "antar", correct: false}, {word: "cenefa", correct: true}, {word: "asesinato", correct: true},
    {word: "helar", correct: true}, {word: "yunque", correct: true}, {word: "regar", correct: true},
    {word: "abracer", correct: false}, {word: "floroso", correct: false}, {word: "arsa", correct: false},
    {word: "brecedad", correct: false}, {word: "ávido", correct: true}, {word: "capillo", correct: true},
    {word: "lacayo", correct: true}, {word: "lampera", correct: false}, {word: "látigo", correct: true},
    {word: "bisagra", correct: true}, {word: "secuestro", correct: true}, {word: "acutación", correct: false},
    {word: "merodear", correct: true}, {word: "decar", correct: false}, {word: "alardio", correct: false},
    {word: "pandilla", correct: true}, {word: "fatacidad", correct: false}, {word: "pauca", correct: false},
    {word: "aviso", correct: true}, {word: "rompido", correct: false}, {word: "loro", correct: true},
    {word: "granuja", correct: true}, {word: "estornudar", correct: true}, {word: "torpe", correct: true},
    {word: "alfombra", correct: true}, {word: "rebuscar", correct: true}, {word: "cadallo", correct: false},
    {word: "canela", correct: true}, {word: "cuchara", correct: true}, {word: "jilguero", correct: true},
    {word: "martillo", correct: true}, {word: "cartinar", correct: false}, {word: "ladrón", correct: true},
    {word: "ganar", correct: true}, {word: "flamida", correct: false}, {word: "candado", correct: true},
    {word: "camisa", correct: true}, {word: "vegada", correct: true}, {word: "fomentar", correct: true},
    {word: "nevar", correct: true}, {word: "musgo", correct: true}, {word: "tacaño", correct: true},
    {word: "plaudir", correct: false}, {word: "besar", correct: true}, {word: "matar", correct: true},
    {word: "seda", correct: true}, {word: "flaco", correct: true}, {word: "esposante", correct: false},
    {word: "orgulloso", correct: true}, {word: "bizcocho", correct: true}, {word: "hacido", correct: false},
    {word: "cabello", correct: true}, {word: "alegre", correct: true}, {word: "engatusar", correct: true},
    {word: "temblo", correct: false}, {word: "polvoriento", correct: true}, {word: "pemición", correct: false},
    {word: "hervidor", correct: true}, {word: "cintro", correct: false}, {word: "yacer", correct: true},
    {word: "atar", correct: true}, {word: "tiburón", correct: true}, {word: "frondoso", correct: true},
    {word: "tropaje", correct: false}, {word: "hormiga", correct: true}, {word: "pozo", correct: true},
    {word: "empirador", correct: false}, {word: "guante", correct: true}, {word: "escuto", correct: false},
    {word: "laúd", correct: true}, {word: "barato", correct: true}, {word: "grodo", correct: false},
    {word: "acantilado", correct: true}, {word: "prisa", correct: true}, {word: "clavel", correct: true}
];

let currentWords = [];
let currentIndex = 0;
let score = 0;
let userInfo = {};

document.getElementById('englishButton').addEventListener('click', function() {
    showInstructions('english');
});

document.getElementById('spanishButton').addEventListener('click', function() {
    showInstructions('spanish');
});

function showInstructions(language) {
    userInfo.language = language;
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('testContent').style.display = 'block';
    document.getElementById(language + 'Instructions').style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    userInfo.name = document.getElementById('name').value;
    userInfo.email = document.getElementById('email').value;
    
    document.getElementById('instructionsArea').style.display = 'none';
    document.getElementById('userForm').style.display = 'none';
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
