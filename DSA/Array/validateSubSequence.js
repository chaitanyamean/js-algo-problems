


/// Validate Subsequence array

// Time complexity O(n)  space complexity O(1)


function validateSubsequence(arr, seq) {
    let seqId = 0
    for(let value of arr) {
        if(seqId == seq.length) break;
        if(seq[seqId] == value) seqId++ 
    }
    return seqId == seq.length
}


validateSubsequence([5,1,22,25,6,-1,8,10], [1,6,8,10])