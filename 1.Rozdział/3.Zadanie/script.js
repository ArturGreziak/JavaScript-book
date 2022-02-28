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
// pętle zagnieżdżone są jak normalne pętle, po prostu jedna z instrukcji pętli jest inna pętla
// najprostsze scanariusze to np.chodzenie po jakiejś planszy 2d / tabelce / liście obiektów które mają w sobie inne listy
// pętlę wewnętrzną można wrzucić do jakiejś funkcji co często ma sens,
// zagnieżdżone pętle to często sygnał że kod jest nieczytelny,
// rzadko kiedy kod z dużym poziomem zagnieżdżeń jest sensowny, a każda pętla to dodatkowy poziom zagnieżdżenia
// ale czasem coś można napisać na szybko albo jak przekazywanie stanu pomiędzy poziomami byłoby zbyt upierdliwe a scenariusz jest w miarę prosty

let size = 8;
for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 1; j <= size; j++)
        str += j % 2 ? '#' : ' ';
    if (i % 2 == 0)
        str = (' ' + str).trimEnd();
    console.log(str);
}