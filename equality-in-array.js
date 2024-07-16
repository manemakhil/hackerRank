// Problem: https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let arrHash = {};
    return arr.length - arr.reduce(
        (maxLen, a) => {
            arrHash[a] ? ++arrHash[a] : (arrHash[a] = 1);
            return arrHash[a] > maxLen ? arrHash[a] : maxLen
        },
        0
    );
}