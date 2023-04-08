//produces the n-th index's value of the fibonacci sequence
//O(2^n) -> not great for solving the fibonacci problem
function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
console.log(fibonacci(7));