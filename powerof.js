//determine if n is power of 2 using bitwise operator
//O(1)
function isPower(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(isPower(5));