// Porównywanie głębokie
// Operator == sprawdza, czy dwie nazwy odnoszą się do tego samego obiektu.Ale czasami trzeba porównać wartości poszczególnych własności obiektów.
// Napisz funkcję o nazwie deepEqual pobierającą dwie wartości i zwracającą wartość true tylko wtedy, 
// gdy reprezentują one tę samą wartość lub są obiektami mającymi takie same własności o takich samych 
// wartościach(przy porównywaniu za pomocą rekurencyjnego wywołania funkcji deepEqual).
// Aby określić, czy dwa elementy trzeba porównać bezpośrednio(użyj do tego operatora ===), 
// czy według własności, można użyć operatora typeof.Jeśli dla obu wartości zwróci "object", 
// to znaczy, że należy wykonać porównywanie głębokie.Należy tylko uwzględnić jeden głupi 
// wyjątek: przez przypadek, który miał miejsce dawno temu, operator typeof dla wartości null również zwraca "object".
// Funkcja Object.keys przyda się, gdy będzie trzeba przejrzeć własności obiektów w celu ich porównania.
