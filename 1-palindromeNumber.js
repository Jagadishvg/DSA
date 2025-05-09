const palindrome = (x) => {
    if (x < 0) return false;

    const res = x.toString().split("").reverse().join("")
    return +res === x
}
console.log(palindrome(121))
