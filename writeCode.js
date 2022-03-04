function sumToZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            let judge = arr[i] + arr[j]
            if (judge === 0) return true
        }
    }
    return false
}
console.log(sumToZero([1, 2, 3 , -2]))
// runtime complexity is O(n^2) cause nested loop
// space complexity if O(1)

function uniqueChars(str) {
    let unique = []
    for(let i = 0; i < str.length; i++){
        if (unique.includes(str[i])) return false
        else unique.push(str[i])
    }
    return true
}
console.log(uniqueChars("monday"))
// runtime complexity is O(n) due to amount of operations being determined by str.length
// space complexity id O(1)

function isPangram(str) {
    let alphabetIncluded = []
    let newString = str.replace(/[^A-Z0-9]/ig, "");
    newString = newString.toLowerCase()
    //console.log(newString)
    for(let i = 0; i < newString.length; i++){
        if (alphabetIncluded.includes(newString[i])) continue
        else alphabetIncluded.push(newString[i])
    }
    if (alphabetIncluded.length === 26) return true
    else return false
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//runtime complexity is O(n) amount of operations only determined by str.length

function longestWord(arr) {
    let longest = 0
    for(let i = 0; i < arr.length; i++) if (arr[i].length > longest) longest = arr[i].length
    return longest
}
console.log(longestWord(["hi", "hello", "superduper", "hi"]))
//runtime complexity is O(n) only depends on arr.length