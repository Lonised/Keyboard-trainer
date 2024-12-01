const texts = [
    "Искусственный интеллект и будущее",
    "Преимущества утренней зарядки",
    "Роль воды в организме",
    "Эволюция смартфонов",
    "Мир космоса",
    "Как побороть прокрастинацию?",
    "Почему важно учить языки?",
    "Жизнь в большом городе",
    "Влияние музыки на человека",
    "Путешествия по миру"
];

let startBtn = document.getElementById('start-btn');
let testBtn = document.getElementById('test-btn');
let restartBtn = document.getElementById('restart-btn');
let cancelBtn = document.getElementById('cancel-btn');
let typingArea = document.getElementById('typing-area');
let textDiv = document.getElementById('text');
let inputField = document.getElementById('input-field');
let timerDiv = document.getElementById('timer');
let resultDiv = document.getElementById('result');
let correctCharsText = document.getElementById('correct-chars');
let errorsText = document.getElementById('errors');
let speedText = document.getElementById('speed');
let introText = document.getElementById('intro-text');
let cancelMessage = document.getElementById('cancel-message');
let currentText = '';
let timer;
let timeLeft = 60;
let correctCount = 0;
let incorrectCount = 0;
let startTime;
let isTestRunning = false;

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';  // Скрываем кнопку "Start"
    introText.style.display = 'none';
    testBtn.style.display = 'inline-block';  // Показываем кнопку "Начать тест"
});

testBtn.addEventListener('click', () => {
    testBtn.style.display = 'none';
    currentText = texts[Math.floor(Math.random() * texts.length)];
    textDiv.innerHTML = currentText.split('').map(char => `<span class="char">${char}</span>`).join('');
    typingArea.style.display = 'block';
    inputField.focus();
    startTimer();
    isTestRunning = true;
    cancelBtn.style.display = 'inline-block'; // Показываем кнопку "Отмена"
});

let totalErrors = 0; // Общее количество ошибок

inputField.addEventListener('input', () => {
    if (!isTestRunning) return;

    let inputText = inputField.value;
    let displayedChars = textDiv.getElementsByClassName('char');

    correctCount = 0;
    incorrectCount = 0; // Сбрасываем счётчик ошибок перед новой проверкой

    for (let i = 0; i < displayedChars.length; i++) {
        let charElement = displayedChars[i];

        if (i < inputText.length) {
            if (inputText[i] === charElement.textContent) {
                // Символ введён правильно
                charElement.classList.add('correct');
                charElement.classList.remove('incorrect');
                correctCount++;
            } else {
                // Символ введён неправильно
                if (!charElement.classList.contains('incorrect')) {
                    totalErrors++; // Увеличиваем общее количество ошибок только при первой ошибке
                }
                incorrectCount++; // Увеличиваем текущий счётчик ошибок
                charElement.classList.add('incorrect');
                charElement.classList.remove('correct');
            }
        } else {
            // Не введён символ, сбрасываем форматирование
            charElement.classList.remove('correct', 'incorrect');
        }
    }

    // Проверяем, введён ли весь текст
    if (inputText.length === currentText.length) {
        clearInterval(timer);
        endTest();
    }
});



function endTest(isCanceled = false) {
    isTestRunning = false;
    typingArea.style.display = 'none'; // Скрываем текст и поле ввода
    inputField.value = ''; // Очищаем поле ввода

    if (isCanceled) {
        cancelMessage.textContent = "Вы отменили тест, следовательно мы не можем вывести результат.";
        cancelMessage.style.display = 'block';
        resultDiv.style.display = 'none';
    } else {
        let elapsedTime = (Date.now() - startTime) / 1000; // Время в секундах
        let wordsPerMinute = (correctCount / elapsedTime) * 60; // Скорость в словах в минуту
        resultDiv.style.display = 'block';
        cancelMessage.style.display = 'none';
        correctCharsText.textContent = `Правильных символов: ${correctCount}`;
        errorsText.textContent = `Ошибок (включая исправленные): ${totalErrors}`;
        speedText.textContent = `Скорость печати: ${wordsPerMinute.toFixed(2)} слов/минуту`;
    }

    cancelBtn.style.display = 'none'; // Прячем кнопку "Отмена"
    restartBtn.style.display = 'inline-block'; // Показываем кнопку "Перезапустить"
}


restartBtn.addEventListener('click', () => {
    restartBtn.style.display = 'none'; // Прячем кнопку "Перезапустить"
    cancelMessage.style.display = 'none';
    startBtn.style.display = 'inline-block'; // Показываем кнопку "Start"
    introText.style.display = 'block'; // Показываем инструкцию
    resultDiv.style.display = 'none'; // Прячем результаты
    totalErrors = 0; // Сбрасываем общее количество ошибок
});



cancelBtn.addEventListener('click', () => {
    clearInterval(timer);  // Останавливаем таймер
    endTest(true);  // Завершаем тест с отменой
});

function startTimer() {
    timeLeft = 60;
    timerDiv.textContent = `Время: ${timeLeft}s`;
    startTime = Date.now();
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDiv.textContent = `Время: ${timeLeft}s`;
        } else {
            clearInterval(timer);
            endTest();
        }
    }, 1000);
}

function endTest(isCanceled = false) {
    isTestRunning = false;
    typingArea.style.display = 'none';  // Скрываем текст и input
    inputField.value = '';  // Очищаем поле ввода

    if (isCanceled) {
        cancelMessage.textContent = "Вы отменили тест, следовательно мы не можем вывести результат.";
        cancelMessage.style.display = 'block';  // Показываем сообщение об отмене
        resultDiv.style.display = 'none';  // Прячем результаты
    } else {
        let elapsedTime = (Date.now() - startTime) / 1000; // Время, прошедшее с начала теста
        let wordsPerMinute = (correctCount / elapsedTime) * 60; // Скорость в словах в минуту
        resultDiv.style.display = 'block';
        cancelMessage.style.display = 'none';  // Прячем сообщение об отмене
        correctCharsText.textContent = `Правильных символов: ${correctCount}`;
        errorsText.textContent = `Ошибок: ${incorrectCount}`;
        speedText.textContent = `Скорость печати: ${wordsPerMinute.toFixed(2)} слов/минуту`;
    }

    cancelBtn.style.display = 'none';  // Прячем кнопку "Отмена"
    restartBtn.style.display = 'inline-block';  // Показываем кнопку "Перезапустить"
}

restartBtn.addEventListener('click', () => {
    restartBtn.style.display = 'none';  // Прячем кнопку "Перезапустить"
    cancelMessage.style.display = 'none';
    startBtn.style.display = 'inline-block';  // Показываем кнопку "Start"
    introText.style.display = 'block';  // Показываем инструкцию
    resultDiv.style.display = 'none';  // Прячем результаты
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const body = document.body;

    // Проверяем сохранённую тему
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        body.classList.add("dark-mode");
        document.querySelectorAll("button").forEach((btn) => btn.classList.add("dark-mode"));
    }

    themeToggleBtn.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");
        document.querySelectorAll("button").forEach((btn) => btn.classList.toggle("dark-mode", isDark));
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});


// Получаем кнопку
const themeToggleButton = document.getElementById("theme-toggle");

// Функция переключения темы
themeToggleButton.addEventListener("click", () => {
    // Переключаем класс на элементе body
    document.body.classList.toggle("dark-mode");

    // Проверяем, активен ли темный режим
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Обновляем класс кнопки
    themeToggleButton.classList.toggle("dark", isDarkMode);
    themeToggleButton.classList.toggle("light", !isDarkMode);

    // Сохраняем тему в localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Проверяем и применяем тему при загрузке страницы
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";

    // Устанавливаем тему
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeToggleButton.classList.add("dark");
    } else {
        themeToggleButton.classList.add("light");
    }
});
