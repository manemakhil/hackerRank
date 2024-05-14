// Problem: https://www.hackerrank.com/challenges/find-digits/problem

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let num = n, count = 0;
    do {
        if(n % (num % 10) === 0)
            count++;
        num = Math.floor(num/10);
    } while(num !== 0);
    
    return count;
}