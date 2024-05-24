// Получаем элементы кнопки и её контейнера
const playButton = document.getElementById('playButton');
const playButtonContainer = document.getElementById('playButtonContainer');

// Функция, которая будет вызвана при начале перетаскивания
function dragStart(e) {
    // Запоминаем начальные координаты мыши и положение кнопки
    this.startX = e.clientX - this.offsetLeft;
    this.startY = e.clientY - this.offsetTop;
}

// Функция, которая будет вызвана при перемещении мыши
function drag(e) {
    // Вычисляем новые координаты кнопки
    const newX = e.clientX - this.startX;
    const newY = e.clientY - this.startY;

    // Устанавливаем новое положение кнопки
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
}

// Функция, которая будет вызвана при окончании перетаскивания
function dragEnd() {
    // Очищаем временные переменные
    this.startX = null;
    this.startY = null;
}

// Добавляем обработчики событий для кнопки
playButton.addEventListener('mousedown', dragStart);
playButton.addEventListener('mousemove', drag);
playButton.addEventListener('mouseup', dragEnd);


