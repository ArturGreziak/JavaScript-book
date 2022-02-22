// Pętlowy trójkąt
/*
Napisz pętlę wywołującą siedem razy funkcję console.log i drukującą poniższy trójkąt:
#
##
###
####
#####
######
#######
Może Ci się przydać informacja, że długość łańcucha da się sprawdzić, wpisując za nim .length.
var abc = "abc";
console.log(abc.length);
// → 3
*/

for (let line = '#'; line.length < 8; line += '#')
    console.log(line);

for (let i = 1; i < 8; i++) {
    console.log('#'.repeat(i));
}