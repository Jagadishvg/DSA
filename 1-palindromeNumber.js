const isPalindrome = (x) => {
    if (x < 0) return false;

    const res = x.toString().split("").reverse().join("")
    return +res === x
}
console.log(isPalindrome(121))
