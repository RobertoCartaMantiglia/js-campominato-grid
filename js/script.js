// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.



// recupero il contenitore della griglia dal documento: 
const containerGrid = document.querySelector("div.grid");

// creo il quadrato/casella
const gridSquare = document.createElement("div");

// aggiungo la classe "square" che ho preparato in css per vederne il comportamento 
gridSquare.classList.add("square");

// procedo ad "appenderlo" al parent 
containerGrid.append(gridSquare);
