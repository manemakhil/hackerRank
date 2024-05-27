// Problem: https://www.hackerrank.com/challenges/extra-long-factorials/problem

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    let fact = 1n, num = BigInt(n);

    while (num !== 0n) {
        fact *= num--;
    }

    console.log(fact.toString());
}