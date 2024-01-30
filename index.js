// Code your solution in this file!

function distanceFromHqInBlocks(crossStreet) {
    return Math.abs(crossStreet - 42);
}

function distanceFromHqInFeet(crossStreet) {
    return 264 * distanceFromHqInBlocks(crossStreet);
}

function distanceTravelledInFeet(start, dest) {
    return Math.abs(start-dest) * 264;
}

function calculatesFarePrice(start, dest) {
    const dist = distanceTravelledInFeet(start, dest);
    switch (true) {
        case dist > 2500:
            return 'cannot travel that far';
        case dist > 2000:
            return 25;
        case dist >= 400:
            return (dist - 400) * 0.02;
        case dist > 0:
            return 0;
    }
}