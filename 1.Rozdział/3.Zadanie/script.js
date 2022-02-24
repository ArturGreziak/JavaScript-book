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
let liczbaHasz = 5;

for (let i = 0; i < liczbaHasz; i++){
    console.log(i, `# # # #`);
    console.log(i, ` # # # #`);
}