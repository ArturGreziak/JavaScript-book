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
// function reverseArrayInPlace(){

// }