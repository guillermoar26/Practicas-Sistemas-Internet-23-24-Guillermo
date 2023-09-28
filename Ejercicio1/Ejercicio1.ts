export function quicksort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    } else {
        const pivot: number = array[0];
        const less: number[] = [];
        const greater: number[] = [];

        for (let i = 1; i < array.length; i++) {
            if (array[i] <= pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        return [...quicksort(less), pivot, ...quicksort(greater)];
    }
}


const myArray: number[] = [10, 5, -3, 100, 0, -20, 6, 13, 25, -10];
console.log(quicksort(myArray));
