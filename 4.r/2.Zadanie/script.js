// Odwracanie tablicy

// Napisz dwie funkcje o nazwach reverseArray i reverseArrayInPlace. W żadnej z tych dwóch metod nie możesz używać standardowej metody reverse .
// Pierwsza niech pobiera tablicę jako argument i zwraca nową tablicę z tymi samymi elementami, tylko w odwrotnej kolejności.

// Tutaj kod pierwszej funkcji
function reverseArray(arr) {
    const tab = [];
    for (let i = arr.length -1; i >= 0; i--) {
        tab.push(arr[i]);
    }
    return tab;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray([5, 6, 7, 8, 9]));
// |---------------------------------------------------------------------------------------------------------------------------------------|

// Natomiast metoda reverseArrayInPlace niech robi to samo co metoda reverse, tzn. niech modyfikuje tablicę przekazaną jej jako argument.

// Tutaj kod drugiej funkcji

function reverseArrayInPlace(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArrayInPlace(arr1);
console.log(arr1);
const arr2 = [13, 9, 3, 15, 10];
reverseArrayInPlace(arr2);
console.log(arr2);