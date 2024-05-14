// Problem: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let ranking = [1], playerRanking = [], lastChecked = ranked.length - 1;
    
    // Ranking the leaderboard
    for(let r = 1; r < ranked.length; r++) {
        ranking.push(ranking[r-1]);
        
        if(ranked[r-1] > ranked[r]) {
            ranking[r]++;
        }
    }

    let p = 0, r = 0;
    for(; p < player.length; p++) {
        for(r = lastChecked; r >= 0; r--) {
            if(player[p] < ranked[r]) {
                playerRanking.push(ranking[r] + 1);
                lastChecked = r;
                break;
            } else if(player[p] === ranked[r]) {
                playerRanking.push(ranking[r]);
                lastChecked = r;
                break;
            }
        }
        if(r < 0) break;
    }

    for(; p < player.length; p++) {
        playerRanking.push(1);
    }
    
    return playerRanking;
}