// 1. Napisati program koji, koristeći promenljive a i b, koje sadrže dužine stranica pravougaonika, izračunava njegov obim i površinu.

var a = 5;
var b = 6;

var obim = 2*a + 2*b;
var povrsina = a * b;

console.log("Obim pravougaonika iznosi: " + obim);
console.log("Povrsina pravougaonika iznosi: " + povrsina);



// 2. Napisati program koji računa kvadrat neke prozivoljne promenljive.

var a = 5;
var kvadrat = a * a;

console.log("Kvadrat broja " + 5 + " iznosi: " + kvadrat);



// 3. Napisati program koji kreira 2 promenljive a i b i dodeljuje im vrednost 2 broja. Ako je zbir ovih brojeva veći od 10, ispisati ga, u suprotnom ispisati njihovu razliku.

var a = 5;
var b = 3;

if (a + b > 10) {
    console.log("Zbir brojeva " + 5 + " i " + 3 + " iznosi: " + (a + b));
} else {
    console.log("Razlika brojeva " + 5 + " i " + 3 + " iznosi: " + (a - b));
}


// 4. Napisati program koji sabira prvih 10 prirodnih brojeva. 


var sum = 0;

for (var i=0; i <= 10; i++) {
    sum = sum + i;  
}
console.log(sum);



// 5 Ispisati elemente proizvoljnog niza brojeva, duplirane.


var niz = [2, 3, 5, 4];

for (var element of niz) {
    console.log(element * 2);
}




// 6. Napisati program koji računa srednju vrednost elemenata proizvoljnog niza brojeva.

var niz = [3, 6, 8, 2, 4];

for (var element of niz) {
    var sum = sum + element;
}
console.log(sum / niz.length);



//7.  Kreirati funkciju koja za data 3 broja racuna njihov prosek.

function prosekBrojeva (a, b, c) {
    return (a + b + c) / prosekBrojeva.length;
}
console.log(prosekBrojeva(2, 4, 6));



// 8. Napisati funkciju celsiusToFahrenheit koja prima temperaturu u stepenima Celzijusa (°C) i vraća odgovarajuću temperaturu u stepenima Farenhajta (°F). Formula za konverziju je sledeća: [°F] = [°C] × 9 ⁄ 5 + 32.


function celsiusToFahrenheit(c) {
    var f = c * 9 / 5 + 32;
    return f;
}
console.log(celsiusToFahrenheit(38));



// 9. Napisati funkciju koja prima proizvoljni niz i neki broj n, i ispisuje elemente niza, uvećane za n, pomoću forEach .


function nizUvecanZaBroj (array, n) {
    array.forEach(function(element) {
        console.log(element + n);
    });
        
}
nizUvecanZaBroj([2, 4, 6,], 5);



// 10. Napisati funkciju koja kao parametar uzima niz, a vraca sumu elemenata tog niza.

var sum = 0;

function imeFunkcije(array) {
    for(var num of array) {
        sum += num;
    }
    return sum;
}

console.log(imeFunkcije([2, 5, 20]));




// 11. Napisati funkciju koja za parametre uzima niz i broj i vraca sve elemente niza koji su veci od tog broja.




function imeNoveFunkcije(array, n) {

    var niz = [];

for (var element of array) {

    if (element > n) {
       niz.push(element);
    }
}
    return niz;
}

console.log(imeNoveFunkcije([23, 10, 5, 55, 98, 18], 24));















