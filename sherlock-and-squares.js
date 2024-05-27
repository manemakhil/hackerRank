/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */
function squares(a, b) {
    // Write your code here
    let sqs = 0,
        firstSquareRoot = false;

    // Find the first square and square root, and exit.
    for (let i = a; i <= b; i++) {
        let sqrt = Math.sqrt(i);
        if (Number.isInteger(sqrt)) {
            sqs++;
            firstSquareRoot = sqrt;
            break;
        }
    }

    if (firstSquareRoot === false) return sqs;

    // Iterate from the found square root, to find other squares in between the given ranges
    for (
        let i = firstSquareRoot + 1, square = i * i;
        square <= b;
        i++, square = i * i
    ) {
        sqs++;
    }

    return sqs;
}