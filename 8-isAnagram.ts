// #242 in leetcode

var isAnagram = function(s, t) {
if(s.length !== t.length){
    return false
}

let mapS = new Map();
let mapT = new Map();

for (let char of s){
    mapS[char] = (mapS[char] || 0) + 1; 
}

for (let char of t){
    mapT[char] = (mapT[char] || 0) + 1; 
}

for (let keys in mapS){
    if (mapS[keys] !== mapT[keys]){
        return false
    }
}
return true
};

console.log(isAnagram("anagram","nagaram"))