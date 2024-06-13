// Problem partially done: https://www.hackerrank.com/challenges/non-divisible-subset/problem

function nonDivisibleSubset(k, s) {
    // Write your code here

    let numbSet = new Set(s),
        /* each conflictsWith has a key value:
        key: the number in consideration
        value:
            [numbers]: true -> keys impying the conflict number
            len: length of conflicts */
        conflictsWith = {},
        maxConflicts = {
            value: undefined,
            len: 0
        };

    /* Loop through all array and note down each element's conflicts. 
    Also note down which on has max conflicts. */
    for (let i = 0; i < s.length; i++) {
        let thisConflictWith = {
            len: 0
        };
        // find and note all conflicts for s[i]
        for (let j = 0; j < s.length; j++) {
            if (i !== j) {
                if ((s[i] + s[j]) % k === 0) {
                    thisConflictWith[s[j]] = true;
                    thisConflictWith.len++;
                }
            }
        }

        // Add to conflictsWith only if there are conflicts
        if (thisConflictWith.len > 0) {
            conflictsWith[s[i]] = thisConflictWith;
        }

        // Find the number with max conflicts
        if (thisConflictWith.len > maxConflicts.len) {
            maxConflicts = {
                value: s[i],
                len: thisConflictWith.len
            }
        }
    }


    // console.log("****Initial:", maxConflicts, conflictsWith);
    // console.log("****Initial_______________________");

    // Function to find the next number with maximum conflicts
    function findNextMax() {
        maxConflicts.len = 0;
        for (let numb in conflictsWith) {
            let thisConflict = conflictsWith[numb];
            if (thisConflict.len > maxConflicts.len) {
                maxConflicts = {
                    value: Number.parseInt(numb),
                    len: thisConflict.len
                }
            }
        }

        if (maxConflicts.len === 0) {
            return false;
        } else {
            return true;
        }
    }

    if (maxConflicts.len !== 0) {
        do {
            // Deleting all conflicts references related to maxConflicts
            // In other elements references to maxConflict
            for (let conflictValue in conflictsWith[maxConflicts.value]) {
                if (conflictValue === 'len') continue;

                let thisConflict = conflictsWith[conflictValue];

                // Delete the reference to this max-conflict-number in this max-conflict-number's conflict
                delete thisConflict[maxConflicts.value];
                thisConflict.len--;
                if (thisConflict.len === 0) {
                    delete conflictsWith[conflictValue];
                }
            }

            // Deleting the maximum conflict number from conflictsWith and numbSet
            delete conflictsWith[maxConflicts.value];
            numbSet.delete(maxConflicts.value);

            // console.log("______________________");
            // console.log(maxConflicts, conflictsWith);
            // console.log("______________________");
        } while (findNextMax())
    }



    return numbSet.size;
}