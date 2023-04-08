//binary search
//O(log n)
function binarySearch(arr, value) {
    arrSorted = arr.sort((a, b) => a - b);
    console.log(arrSorted);

    let leftIndex = 0;
    let rightIndex = arrSorted.length - 1;
    if (arrSorted.length === 0) {
        return -1;
    }

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (value === arrSorted[middleIndex]) {
            return middleIndex;
        } else if (value < arrSorted[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else if (value > arrSorted[middleIndex]) {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));