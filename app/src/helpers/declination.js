export const declination = (number, titles) => {
    let num = number % 100;

    if (num > 19) {
        num = num % 10;
    }

    switch (num) {
        case 1:
            return titles[0];
        case 2: case 3: case 4:
        return titles[1];
        default:
            return titles[2];
    }
}
