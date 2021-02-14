const colorName = ['blue', 'red', 'purple', 'cyan', 'green'];
const colorValue = ['rgb(217, 237, 255)', 'rgb(255, 217, 217)', 'rgb(238, 217, 255)', 'rgb(217, 251, 255)', 'rgb(217, 255, 217)']

const btn = document.getElementById('btn');
const colorText = document.querySelector('.color-text');

btn.addEventListener('click', () => {
    const randomIndex = getRandomNumber();
    document.body.style.backgroundColor = colorValue[randomIndex];
    colorText.textContent = colorName[randomIndex];
})

const rememberPreviousNumber = () => {
    var loopAgain = true;
    var previousIndex;
    const getRandomNumber = () => {
        var randomIndex;
        do {
            loopAgain = true;
            randomIndex = Number.parseInt(Math.random() * colorName.length)
            if (randomIndex != previousIndex) {
                previousIndex = randomIndex;
                loopAgain = false;
            }
        } while (loopAgain);
        return randomIndex;
    }
    return getRandomNumber;
}

const getRandomNumber = rememberPreviousNumber();

// random a color when the script is first run
const randomIndex = getRandomNumber();
document.body.style.backgroundColor = colorValue[randomIndex];
colorText.textContent = colorName[randomIndex];