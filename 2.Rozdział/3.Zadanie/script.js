// Liczenie znaków
// Z łańcucha można pobrać znak o dowolnym numerze N za pomocą wyrażenia "łańcuch"[N].
// Zostanie zwrócona wartość w postaci jednego znaku(np. "a").
// Pierwszy znak ma numer zero, w związku z czym ostatni znajduje się na pozycji o numerze string.length - 1.
// Innymi słowy, dwuznakowy łańcuch ma długość(length) 2, a tworzące go znaki znajdują się na pozycjach o numerach 0 i 1.
// Napisz funkcję o nazwie CountBs pobierającą łańcuch jako jedyny argument i zwracającą liczbę wielkich liter B w tym łańcuchu.
// Następnie napisz funkcję o nazwie countChar działającą podobnie jak countBs, tylko przyjmującą dodatkowy argument określający znak, którego wystąpienia mają być policzone.
// Przepisz funkcję countBs, aby wykorzystać tę nową funkcję.

// function countBs(a){
//     const result = a.split("");
//     return result.filter(el => el === "B");
// }
// console.log(countBs("countBsB"));
// function countBs(a) {
//     let counter = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === "B") {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countBs("countBs"));

function countBs(a) {
       let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "B") {
            counter++;
        }
    }
    return counter;
}
console.log(countBs("countBs"));