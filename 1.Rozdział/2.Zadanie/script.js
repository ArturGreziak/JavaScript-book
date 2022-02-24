/*
FizzBuzz
Napisz program drukujący za pomocą funkcji console.log wszystkie liczby od 1 do 100 z dwoma wyjątkami.Zamiast liczb podzielnych przez 3 wydrukuj słowo Fizz, a zamiast liczb
podzielnych przez 5 wydrukuj słowo Buzz.

Gdy już uda Ci się napisać taki program, zmień go tak, aby drukował napis FizzBuzz zamiast liczb podzielnych zarówno przez 3, jak i
przez 5(i nadal drukował słowa Fizz i Buzz dla liczb podzielnych tylko przez jedną z nich).

(Jest to zadanie wykorzystywane podczas rozmów o pracę dla programistów, przez 
które podobno odpada spory odsetek kandydatów.Jeśli więc udało Ci się je rozwiązać, to masz powody do zadowolenia).
*/

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
    
//     if ((i % 3 === 0) || (i % 5 === 0)){
//         console.log("Fizz Buzz" + i)
        
//     }
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}