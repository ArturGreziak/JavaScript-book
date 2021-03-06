// Suma przedziału liczb

// Napisz funkcję o nazwie range przyjmującą dwa argumenty, start i end, i zwracającą tablicę zawierającą wszystkie liczby od start do end włącznie.

function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(range(1, 10)) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Następnie napisz funkcję sum pobierającą tablicę liczb i zwracającą ich sumę.Wykonaj przykładowy program i sprawdź, czy rzeczywiście zwróci 55.

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55

// Jako dodatkowe ćwiczenie zmodyfikuj funkcję range tak, aby opcjonalnie przyjmowała trzeci argument określający rozmiar „kroku” po wartościach do budowania tablicy. 
// Jeśli argument ten nie zostanie zdefiniowany, wartości tablicy powinny być zwiększane o jeden, czyli tak jak wcześniej. 
// Jeżeli programista zastosuje wywołanie range(1, 10, 2), to powinien otrzymać tablicę[1, 3, 5, 7, 9].Funkcja powinna też obsługiwać odliczanie ujemne, np.dla range(5, 2, -1) powinna zwracać tablicę[5, 4, 3, 2].

function range(start, end, step = 1) {
    const arr = [];
    for (let i = start; step && (step > 0 ? i <= end : i >= end); i += step) {
        arr.push(i)
    }
    return arr;
}
console.log(range(10, -10, -1));  // (21)[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]