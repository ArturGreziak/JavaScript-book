/*
Szachownica
Napisz program tworzący łańcuch reprezentujący siatkę elementów o wymiarach 8×8, używając 
znaków nowego wiersza do oddzielania poszczególnych wierszy. Na każdej pozycji siatki może 
być spacja albo znak #. Znaki te powinny tworzyć szachownicę.Przekazanie tego łańcucha do 
funkcji console.log powinno dawać efekt podobny do poniższego:

# # # #

 # # # #

# # # #

 # # # #

# # # #

 # # # #

# # # #

 # # # #

Po utworzeniu programu generującego taki wzór zdefiniuj wiązanie size = 8 i tak zmodyfikuj program, 
aby dla dowolnej wartości tego wiązania drukował planszę o określonych wymiarach.
*/
// const pionowoHasz = 4;
// const poziomoHasz = 4;
// for (let i = 0; i < pionowoHasz; i++){
//     console.log(i);
// let str = "";
//     for (let j = 0; j < poziomoHasz; j++) {
//         str += `#  \n`;
// }
//     console.log(str);
// }

let size = 8;
for (let i = 1; i <= size; i++) {
    var str = '';
    for (let j = 1; j <= size; j++)
        str += j % 2 ? '#' : ' ';
    if (i % 2 == 0)
        str = (' ' + str).trimEnd();
    console.log(str);
}