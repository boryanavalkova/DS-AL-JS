//linear search function
//O(n)
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));