//Oppgave 1------------------------------------------------------------------------------------------------------------------------

// function button1() {
//     const Username = 'Me'
//     const Password = '123'

//     var Uname = document.getElementById('uname');
//     var Psw = document.getElementById('psw');

//     if (Uname == Username && Psw == Password) {
//         window.alert('Login Vellykket')
//         console.log('Login Vellykket');
//     } else {
//         window.alert('Brukernavn eller passord er feil')
//         console.log('Brukernavn eller passord er feil');
//     }
// };

//Oppgave 2------------------------------------------------------------------------------------------------------------------------

// function leggSammen() {
//     var Tall1 = Number(document.getElementById("tall1").value)
//     var Tall2 = Number(document.getElementById("tall2").value)
//     var Tall3 = Number(document.getElementById("tall3").value)

//     var Sum = (Tall1+Tall2+Tall3)/3;

//     document.getElementById("resultat").innerHTML = Sum;
// }

//Oppgave 3------------------------------------------------------------------------------------------------------------------------

// function toFahrenheit() {
//     var celsius = document.getElementById("celsius").value;
//     var fahrenheit = (celsius * 1.8) + 32;
//     document.getElementById("result").innerHTML = fahrenheit + "°F";
// }

// function toCelsius() {
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celsius = (fahrenheit - 32) / 1.8;
//     document.getElementById("result").innerHTML = celsius + "°C";
// }

//Oppgave 4------------------------------------------------------------------------------------------------------------------------

// var T1 = Number(prompt("Skriv hvor mange timer du parkerte"));

// if (T1 == 1) {
//     Pris = 5;
// } else if (T1 <= 5) {
//     Pris = 5 + (T1 - 1) * 4;
// } else {
//     Pris = 5 + 4 * 4 + 3 * (T1 - 5);
// }

// console.log("Prisen er " + Pris + "kr");

//Oppgave 5------------------------------------------------------------------------------------------------------------------------

// var T1 = Number(prompt("Skriv et tall"));

// var Sum = 0;
// for (let i = 1; i <= T1; i++) {
//     Sum += i;
//     console.log(Sum);
// }

// console.log("Sum = " + Sum);

//Oppgave 6------------------------------------------------------------------------------------------------------------------------

// var T1 = Number(prompt("Skriv et tall"));

// for (let i = 1; i <= T1; i++) {
//     var Stjerne = "";
//     for (let o = 1; o <= i; o++) {
//         Stjerne += "*";
//     }
//     console.log(Stjerne);
// }

// for (let i = T1 - 1; i >= 1; i--) {
//     var Stjerne = "";
//     for (let o = 1; o <= i; o++) {
//         Stjerne += "*";
//     }
//     console.log(Stjerne);
// }

//Oppgave -------------------------------------------------------------------------------------------------------------------------