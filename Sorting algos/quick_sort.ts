/**
 * Partition function for taking a new pivot
 *
 *
 *
 * @param arr
 * @param low
 * @param high
 */
const partition = (arr: number[], low: number, high: number) => {
    let pivot = arr[high]
    let i = low - 1
    console.log(arr)
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    console.log(arr)
    return i + 1
}

/**
 * Swap function for swapping the two element
 * @param arr
 * @param left
 * @param right
 */
const swap = (arr: number[], left: number, right: number) => {
    const temp: number = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

/**
 * Quick sort function
 * @param arr
 * @param low
 * @param high
 */
const quick_sort = (arr: number[], low: number, high: number) => {

    if (low < high) {
        /**
         * First we will take *index : high* as the pivot element
         *
         */
        let newPivotIndex = partition(arr, low, high)

        quick_sort(arr, low, newPivotIndex - 1)
        quick_sort(arr, newPivotIndex + 1, high)
    }
}

(() => {
    // const arr = [6, 2, 8, 15, 11, 6, 3]
    const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
    const low = 0, high = arr.length - 1;
    console.log(`Before sorting ::: ${arr}`)
    quick_sort(arr, low, high)
    console.log(`After sorting ::: ${arr}`)
})()