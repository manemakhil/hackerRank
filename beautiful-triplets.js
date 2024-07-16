// Problem: https://www.hackerrank.com/challenges/beautiful-triplets/problem
/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    if (arr.length < 3) return 0;

    let count = 0, second = 1, third = 2, secondFirstDiff, thirdSecondDiff;
    for (let first = 0; first < arr.length - 2; first++) {
        for (
            let secondInd = second <= first ? first + 1 : second;
            secondInd < arr.length - 1;
            secondInd++
        ) {
            secondFirstDiff = arr[secondInd] - arr[first];
            if (secondFirstDiff > d) {
                break;
            } else if (arr[secondInd] - arr[first] === d) {
                second = secondInd;
                for (
                    let thirdInd = third <= second ? second + 1 : third;
                    thirdInd < arr.length;
                    thirdInd++
                ) {
                    thirdSecondDiff = arr[thirdInd] - arr[second];
                    if (thirdSecondDiff > d) {
                        break;
                    } else if (thirdSecondDiff === d) {
                        third = thirdInd;
                        count++;
                    }
                }
            }
        }
    }

    return count;
}