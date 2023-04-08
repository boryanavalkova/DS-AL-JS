//js uses insertion sort for .sort
//function that does insertion sort on an array
//O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberInsert;
    }
    return arr;
}

console.log(insertionSort([8, 20, -2, 4, -6]));