const startScreen = document.getElementById('start-screen');
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const noResultScreen = document.getElementById('no-result-screen');

const startBtn = document.getElementById('start-btn');
const testBtn = document.getElementById('test-btn');
const cancelBtn = document.getElementById('cancel-btn');
const restartBtn = document.getElementById('restart-btn');
const restartBtnNoResult = document.getElementById('restart-btn-no-result');

const textDiv = document.getElementById('text');
const inputField = document.getElementById('input-field');
const timerDiv = document.getElementById('timer');
const correctCharsText = document.getElementById('correct-chars');
const errorsText = document.getElementById('errors');
const speedText = document.getElementById('speed');
const resultMessage = document.getElementById('result-message');

const texts = [
    `Искусственный интеллект (ИИ) представляет собой одну из самых революционных технологий современности. Его развитие обещает кардинально изменить все аспекты жизни, от рабочих мест до личных отношений. Уже сегодня ИИ помогает в медицине, анализируя огромные объемы данных для диагностики заболеваний и разработки новых методов лечения. В промышленности и бизнесе ИИ используется для автоматизации процессов, повышения эффективности и снижения затрат. Однако его внедрение также порождает вопросы о безопасности, конфиденциальности и возможных рисках. В будущем ИИ будет иметь способность к самообучению, что открывает новые горизонты, но также вызывает опасения о потере контроля. Важно понимать, что искусственный интеллект — это не просто замена человеческого труда, а мощный инструмент, который при грамотном использовании может значительно улучшить качество жизни. Вопросы этики, регулирования и взаимодействия человека с машинами будут оставаться в центре общественного обсуждения, когда ИИ станет неотъемлемой частью всех сфер человеческой деятельности.`,
    `Утренняя зарядка - это не только способ пробудить организм, но и важная часть здорового образа жизни. Исследования показывают, что утренние физические упражнения способствуют улучшению кровообращения, повышению уровня энергии и улучшению настроения на протяжении всего дня. Регулярные тренировки с утра активируют метаболизм, что способствует более эффективному сжиганию калорий и улучшению обмена веществ. Утренние занятия также помогают снизить уровень стресса и тревожности, что важно для поддержания психоэмоционального здоровья. Если вы хотите улучшить свою физическую форму, начать день с зарядки - отличная идея. Преимущества утренней зарядки становятся очевидными: она помогает настроиться на продуктивный день, улучшает концентрацию и способствует более глубокому и качественному сну ночью.`,
    `Вода - основа жизни на Земле, и ее роль в организме человека невозможно переоценить. Она составляет около 60% массы тела взрослого человека и участвует в самых различных биологических процессах. Вода является важным компонентом клеток, тканей и органов, поддерживая их структуру и функции. Она помогает транспортировать питательные вещества, выводить токсины и регулирует температуру тела. Недавние исследования показали, что даже незначительное обезвоживание может негативно сказаться на мозговой активности, концентрации и физической выносливости. Поэтому важно поддерживать водный баланс, особенно в условиях жаркой погоды или интенсивной физической нагрузки. Питьевая вода не только важна для здоровья, но и помогает в поддержании оптимального уровня энергии, улучшает состояние кожи и способствует нормализации обмена веществ. Важно помнить, что вода должна быть качественной и чистой, а также употребляться в достаточном количестве в течение дня.`,
    `Смартфоны стали неотъемлемой частью нашей жизни, и их эволюция за последние десятилетия поразительна. Поначалу мобильные телефоны были устройствами исключительно для связи, но со временем они превратились в мощные мультимедийные центры и карманные компьютеры. Одним из самых больших достижений стало появление сенсорных экранов, которые заменили кнопки и позволили создавать более удобные и интуитивно понятные интерфейсы. Сегодня смартфоны выполняют тысячи различных функций, начиная от фото и видеосъемки, до мониторинга здоровья и управления умным домом. Эволюция технологий, таких как 5G и искусственный интеллект, продолжает открывать новые возможности для мобильных устройств. Мы наблюдаем, как смартфоны становятся все более мощными и умными, а их роль в жизни человека неуклонно растет. На горизонте - новые тенденции, такие как foldable-смартфоны и интеграция с виртуальной реальностью, что обещает еще более захватывающее будущее для мобильных технологий.`,
    `Космос всегда был объектом восхищения и загадки для человечества. С момента первых наблюдений за ночным небом до запусков космических аппаратов и исследований других планет, стремление понять вселенную не оставляло людей равнодушными. Сегодня мы знаем, что космос — это не только пустота, но и место, наполненное звездами, планетами, черными дырами и другими астрономическими объектами, которые воздействуют на нашу жизнь. Изучение космоса позволяет нам расширить границы знаний, понять происхождение Вселенной и роль нашей планеты в этом огромном пространстве. Современные достижения в астрономии и астрофизике, такие как запуск телескопов и межпланетных миссий, открывают новые горизонты для человечества. Возможно, в будущем люди смогут не только исследовать, но и обживать другие планеты. Космос также вдохновляет на развитие технологий и инноваций, которые могут значительно повлиять на улучшение жизни на Земле.`
];

let currentText = '';
let timer;
let timeLeft = 60;
let correctCount = 0;
let totalErrors = 0;
let isTestRunning = false;

function showScreen(screen) {
    document.querySelectorAll('[data-state]').forEach(div => div.style.display = 'none');
    screen.style.display = 'block';
}

startBtn.addEventListener('click', () => {
    showScreen(introScreen);
});

testBtn.addEventListener('click', () => {
    currentText = texts[Math.floor(Math.random() * texts.length)];
    textDiv.innerHTML = currentText.split('').map(char => `<span class="char">${char}</span>`).join('');
    inputField.value = '';
    correctCount = 0;
    totalErrors = 0;
    timeLeft = 60;

    showScreen(testScreen);
    inputField.focus();
    startTimer();
    isTestRunning = true;
});

inputField.addEventListener('input', () => {
    if (!isTestRunning) return;

    const inputText = inputField.value;
    const displayedChars = textDiv.getElementsByClassName('char');
    correctCount = 0;

    for (let i = 0; i < displayedChars.length; i++) {
        const charElement = displayedChars[i];

        if (i < inputText.length) {
            if (inputText[i] === charElement.textContent) {
                charElement.classList.add('correct');
                charElement.classList.remove('incorrect');
                correctCount++;
            } else {
                charElement.classList.add('incorrect');
                charElement.classList.remove('correct');
                totalErrors++;
            }
        } else {
            charElement.classList.remove('correct', 'incorrect');
        }
    }

    if (inputText.length === currentText.length) {
        clearInterval(timer);
        endTest(false);
    }
});

function endTest(isCanceled) {
    isTestRunning = false;

    if (isCanceled) {
        showScreen(noResultScreen);
    } else {
        const elapsedTime = (60 - timeLeft);
        const wordsPerMinute = (correctCount / elapsedTime) * 60;

        resultMessage.textContent = 'Результаты:';

        correctCharsText.innerHTML = `Правильных символов: <span style="color: green;">${correctCount}</span>`;
        errorsText.innerHTML = `Ошибок: <span style="color: red;">${totalErrors}</span>`;
        speedText.innerHTML = `Скорость печати: <span style="color: ${wordsPerMinute >= 40 ? 'green' : 'red'};">${wordsPerMinute.toFixed(2)}</span> слов/минуту`;

        showScreen(resultScreen);
    }
}

cancelBtn.addEventListener('click', () => {
    clearInterval(timer);
    endTest(true);
});

restartBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

restartBtnNoResult.addEventListener('click', () => {
    showScreen(startScreen);
});

function startTimer() {
    timerDiv.textContent = `Время: ${timeLeft}s`;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDiv.textContent = `Время: ${timeLeft}s`;
        } else {
            clearInterval(timer);
            endTest(false);
        }
    }, 1000);
}

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
