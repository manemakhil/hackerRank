// Problem: https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
    // Write your code here
    /* countOfSticksCut holds each iterations' number of sticks that were cut.
    sticksCut holds the sticks that will be cut in each iterations */
    let shortestStickLen = Infinity, nextShortestStick, countOfSticksCut, sticksCut = [];

    // Find the shortest stick
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue;

        if (arr[i] < shortestStickLen) shortestStickLen = arr[i];
    }

    // If there are no more shortest sticks, we are done
    while (shortestStickLen !== Infinity) {
        countOfSticksCut = 0;
        nextShortestStick = Infinity;

        // Cut the length of all sticks that are greater than 0, and find the next shortest stick
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= 0) continue;

            arr[i] = arr[i] - shortestStickLen;
            countOfSticksCut++;

            if (arr[i] > 0 && arr[i] < nextShortestStick) nextShortestStick = arr[i];
        }

        sticksCut.push(countOfSticksCut);
        shortestStickLen = nextShortestStick;
    }

    return sticksCut;
}