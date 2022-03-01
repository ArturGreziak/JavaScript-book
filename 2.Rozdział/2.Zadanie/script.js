// Rekurencja
// Wiesz już, że operatora % (reszta z dzielenia) można używać do sprawdzania tego, 
// czy dana liczba jest parzysta, czy nieparzysta, za pomocą testu % 2, który pozwala 
// dowiedzieć się, czy wartość jest podzielna bez reszty przez 2, czy nie.Oto inny 
// sposób określenia, czy dodatnia liczba całkowita jest parzysta, czy nieparzysta:
// Zero jest parzyste.
// Jedynka jest nieparzysta.
// Dla każdej innej liczby N jej parzystość jest taka sama jak dla N – 2.
// Zdefiniuj rekurencyjną funkcję o nazwie isEven implementującą ten opis.Funkcja ta 
// powinna przyjmować jeden parametr(dodatnią liczbę całkowitą) i zwracać wartość logiczną.
// Przetestuj ją na liczbach 50 i 75. Sprawdź, jak zadziała na liczbie –1. Wiesz dlaczego tak ? Umiesz to naprawić ?

function silnia(n) {
    if (n == 1)
        return 1;
    else
        return n * silnia(n - 1);
}
console.log(silnia(10));