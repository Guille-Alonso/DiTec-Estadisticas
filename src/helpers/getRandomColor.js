export function getRandomColor() {
    const randomInt = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    const colors = [];
    for (let i = 0; i < 16; i++) {
        const red = randomInt(0, 255);
        const green = randomInt(0, 255);
        const blue = randomInt(0, 255);

        const rgbaColor = `rgba(${red}, ${green}, ${blue}, 1)`;
        colors.push(rgbaColor);
    }

    return colors;
}