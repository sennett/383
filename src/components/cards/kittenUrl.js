const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

export default () => {
    const width = randomNumber(200, 400);
    const height = randomNumber(200, 400);
    return `https://placekitten.com/${width}/${height}`;
}