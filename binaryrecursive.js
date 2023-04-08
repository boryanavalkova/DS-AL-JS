//binary search with rescursive
//O(log n)
function binarySearchRecursive(arr, value) {
    return search(arr, value, 0, arr.length - 1);
};

function search(arr, value, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (value === arr[middleIndex]) {
        return middleIndex;
    } else if (value < arr[middleIndex]) {
        return search(arr, value, leftIndex, middleIndex - 1);
    } else if (value > arr[middleIndex]) {
        return search(arr, value, middleIndex + 1, rightIndex);
    }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 5));