function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function createDiceFace(diceElement, number) {
    diceElement.innerHTML = '';

    const dotPositions = [
        [],
        [[40, 40]],
        [[10, 10], [70, 70]],
        [[10, 10], [40, 40], [70, 70]],
        [[10, 10], [70, 10], [10, 70], [70, 70]],
        [[10, 10], [70, 10], [40, 40], [10, 70], [70, 70]],
        [[10, 10], [70, 10], [10, 40], [70, 40], [10, 70], [70, 70]]
    ];

    dotPositions[number].forEach(pos => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = pos[0] + '%';
        dot.style.top = pos[1] + '%';

        // Eğer zar 1 geldiyse kırmızı yap
        if (number === 1) {
            dot.classList.add('red-dot');
        }

        diceElement.appendChild(dot); // Hatalı olan kısım düzeltilerek 'appendChild' kullanıldı.
    });
}

function rollDice() {
    let dice1, dice2;
    let interval = setInterval(() => {
        dice1 = getRandomNumber();
        dice2 = getRandomNumber();
        createDiceFace(document.getElementById('dice1'), dice1);
        createDiceFace(document.getElementById('dice2'), dice2);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const historyList = document.getElementById('historyList');
        const listItem = document.createElement('li');
        listItem.textContent = `🎲 ${dice1} - ${dice2}`;
        historyList.prepend(listItem);
    }, 2000);
}

// Sayfa yüklendiğinde zarları başlangıçta 1 yap
document.addEventListener("DOMContentLoaded", () => {
    createDiceFace(document.getElementById('dice1'), 1);
    createDiceFace(document.getElementById('dice2'), 1);
});
