const colorName = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const colorText = document.querySelector('.color-text');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomNumber();
    colorText.textContent = getRandomNumber();
})

const getRandomNumber = () => {
    var hexStr = '#';
    for (var i = 0; i < 6; i++) {
        hexStr += colorName[Math.floor(Math.random() * colorName.length)]
    }
    return hexStr;
}

// random a color when the script is first run
document.body.style.backgroundColor = getRandomNumber();
colorText.textContent = getRandomNumber();