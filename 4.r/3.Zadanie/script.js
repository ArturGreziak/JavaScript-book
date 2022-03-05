// Lista
// Z obiektów, będących ogólnymi workami na wartości, można tworzyć rozmaite struktury danych.Jedną z często używanych struktur jest lista(nie mylić z tablicą).Lista to zbiór zagnieżdżonych obiektów, z których pierwszy zawiera odniesienie do drugiego, drugi do trzeciego itd.
// let lista = {

//     wartość: 1,

//     reszta: {

//         wartość: 2,

//         reszta: {

//             wartość: 3,

//             reszta: null

//         }

//     }

// };


// Obiekty tej listy tworzą taki łańcuch:
// Ważną zaletą list jest to, że mogą współdzielić części swojej struktury
// .Na przykład, jeżeli utworzę dwie nowe wartości {wartość 0, reszta: lista } i { wartość - 1, reszta: lista } (lista odnosi się do wcześniej zdefiniowanego wiązania), 
// to będą to dwie niezależne listy dzielące ze sobą strukturę tworzącą ich ostatnie trzy elementy.Pierwotna lista nadal będzie prawidłową trzyelementową listą.
// Napisz funkcję arrayToList tworzącą listę danych podobną do przedstawionej z argumentu[1, 2, 3] i funkcję listToArray tworzącą tablicę z listy.
// Ponadto napisz dwie funkcje pomocnicze.Pierwsza, o nazwie prepend, niech pobiera element i listę i tworzy nową listę z tym elementem na początku listy wejściowej
// .Druga, o nazwie nth, niech pobiera listę i liczbę i zwraca element znajdujący się na danej pozycji w liście(zero odnosi się do pierwszego elementu) lub wartość undefined, 
// jeżeli nie ma elementu o takim numerze.
// Jeśli jeszcze tego nie zrobiłeś, napisz też rekurencyjną wersję funkcji nth.
