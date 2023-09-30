function isPalindrome(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const strReverse = reverseArray.join("");

    if (str === strReverse)
        return true;
    else
        return false;
}

console.log(isPalindrome("arara"));