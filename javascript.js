/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

// String
let userName = "Thomas Hansen";

// Number
const userAge = 22;

// Boolean
let isLoggedIn = true;

// Array
const hobbies = ["gaming", "hikes", "anime"];

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

let a = 11;
let b = 10;

// Matematiske operatorer
console.log(a + b); // 21
console.log(a - b); // 1
console.log(a * b); // 110
console.log(a / b); // 1.1
console.log(a + a); // 22
console.log(b - b); // 0
console.log(a * 2); // 22
console.log(b / 2); // 5

// Forkortede operatorer

a++; // a = a + 1
console.log(a); // 12

b--; // b = b - 1
console.log(b); // 9

a += 5; // a = a + 5
console.log(a); // 17

b -= 3; // b = b - 3
console.log(b); // 6




/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log(`Velkommen, ${userName}! Du er nå logget inn.`);
} else {
    console.log("Beklager, noe gikk galt. Vennligst prøv igjen.");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

// Skriv koden for oppgave 5 her

