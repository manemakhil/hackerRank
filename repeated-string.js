// Problem: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    // Write your code here
    let occurences = 0;

    function subStringCount(subLen) {
        for (let ltrInd = 0; ltrInd < subLen; ltrInd++) {
            if (s[ltrInd] === 'a') occurences++;
        }

        return occurences;
    }

    if (n <= s.length) return subStringCount(n);

    for (let letter of s) {
        if (letter === 'a') occurences++;
    }

    // For repeated string
    occurences += (Math.floor(n / s.length) - 1) * occurences;

    // For remaining string bits
    return subStringCount(n % s.length);
}