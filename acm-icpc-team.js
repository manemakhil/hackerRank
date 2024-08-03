// Problem: https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(topic) {
    // Write your code here
    let max = 0, maxCount = 0;

    for (let i = 0; i < topic.length - 1; i++)
        for (let j = i + 1; j < topic.length; j++) {
            let pairKnowledge = 0;

            for (let z in topic[i])
                if (topic[i][z] === '1' || topic[j][z] === '1') pairKnowledge++;

            if (pairKnowledge > max) {
                max = pairKnowledge;
                maxCount = 1;
            } else if (pairKnowledge === max)
                maxCount++;
        }

    return [max, maxCount];
}