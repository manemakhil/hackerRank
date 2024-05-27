// Problem: https://www.hackerrank.com/challenges/library-fine/problem

/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here

    // We must prevent checking unequal date values when the higer order date values denote a backdate return.
    if (y1 > y2) {
        return 10000;
    } else if (y1 == y2 && m1 > m2) {
        return 500 * (m1 - m2);
    } else if (y1 == y2 && m1 == m2 && d1 > d2) {
        return 15 * (d1 - d2);
    } else {
        return 0;
    }
}