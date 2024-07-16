// Problem partially done: https://www.hackerrank.com/challenges/non-divisible-subset/problem

function nonDivisibleSubset(k, s) {
    // setMap will hold false is any of the s's elements have been added to sub-set
    let setMap = {}, maxLen = 0;

    for (let n of s) {
        setMap[n] = true;
    }

    for (let thisBase in setMap) {
        setMap[thisBase] = false;
        addNext(thisBase, 1);
    }

    function addNext(baseN, len) {
        // Find next number that is eligible with all found numbers
        for (let nextN in setMap) {
            if (setMap[nextN]) {
                let nextNEligible = true;
                // Comparing nextN with existing numbers
                for (let compareN in setMap) {
                    if (setMap[compareN] === false && (compareN + nextN % k === 0)) {
                        nextNEligible = false;
                        break;
                    }
                }

                if (nextNEligible) {
                    setMap[nextN] = false;
                    addNext(nextN, len + 1);
                }
            }
        }

        /* The len here points to the length after the calling recursive has added 
        nextN to it's subarray, and has called addNext to find any next eligible numbers. If no
        next found, we declare len is the max len in this path and compare with maxLen. */
        if (len > maxLen) maxLen = len;
        setMap[baseN] = true;

        return;
    }

    return maxLen;
}
