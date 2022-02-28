// Minimum
// W rozdziale 2. przedstawiłem standardową funkcję o nazwie Math.min zwracającą najmniejszy argument
// (zobacz podrozdział „Wartości zwrotne” w rozdziale 2.).Teraz możemy sami napisać taką funkcję.Napisz 
// funkcję o nazwie min przyjmującą dwa argumenty i zwracającą mniejszy z nich.
function min(a, b){
    return a < b ? a : b;
}
console.log(min(2, 4));