// Problem: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited

function jumpingOnClouds(c, k) {
    let pos = 0, energy = 100, cLoss = {};
    do {
        pos = (pos + k) % c.length;

        if (cLoss[pos]) {
            energy -= cLoss[pos];
        } else {
            if(c[pos] === 1) {
                energy -= 3;
                cLoss[pos] = 3
            } else {
                energy -= 1;
                cLoss[pos] = 3;
            }
        }


    } while (pos !== 0)

    return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))