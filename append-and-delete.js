// Problem: https://www.hackerrank.com/challenges/append-and-delete/problem

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */
function appendAndDelete(s, t, k) {
    // Write your code here

    // Finding the length of difference between strings
    let eqEnd;
    for (eqEnd = 0; eqEnd < s.length; eqEnd++) {
        if (s[eqEnd] === t[eqEnd]) continue;
        else break;
    }
    let removeOps = s.length - eqEnd,
        addOps = t.length - eqEnd;


    // Operations remaining after doing minimum additions and removals
    let remainingOps = k - addOps - removeOps;

    /* If no more ops, perfect fit.
    If we have remaining, it is a Yes if only:
    1. The remainingOps is less than the 
    double of remaining letters in s (insert and delete operations), and
    is even
    2. The remainingOps is more than the double of remaining letters
    in s (insert and delete + delete empty string)
    */
    if (remainingOps === 0) {
        return "Yes";
    } else if (remainingOps > 0) {
        if (
            remainingOps < eqEnd * 2 &&
            remainingOps % 2 === 0
        ) {
            return "Yes";
        } else if (remainingOps > eqEnd * 2) {
            return "Yes";
        }
    }

    return "No";
}