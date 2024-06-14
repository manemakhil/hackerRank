// Problem: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    // Write your code here
    /* There are two possibilites in every iteration:
    1. 0-00: one jump
    2. 0-01: two jumps, and arrive at 001->0
    3. 0-10: one jump */
    let jumps = 0;

    for (let present = 0; present < c.length;) {
        // If there are two more numbers next
        if (present + 2 <= c.length - 1) {
            let nextItems = c.slice(present + 1, present + 3).join('').toString();
            if (nextItems === '00' || nextItems === '10') {
                // Do one jump
                jumps++;
                present += 2;
            } else {
                // Do two jumps
                jumps += 2;
                present += 3;
            }
        } else {
            // If there are less than two numbers next
            if (present + 1 === c.length - 1) {
                jumps++;
            }
            break;
        }
    }

    return jumps;
}