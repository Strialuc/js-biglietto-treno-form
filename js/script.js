/* inizializzo constanti */


const pricePerKm = 0.21;



document.getElementById("form-biglietto").addEventListener("submit", function (event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const km = parseFloat(document.getElementById("km").value);
    console.log(km);

    const fascia = document.getElementById("fascia").value;
    let costoBiglietto = km * pricePerKm;
    let offerta = "Tariffa standard";

    if (fascia === "min") {

        costoBiglietto = (costoBiglietto * 0.8);
        offerta = "Sconto Minorenni (-20%)";

    } else if (fascia === "over") {
        costoBiglietto = (costoBiglietto * 0.6);
        offerta = "Sconto Over 65 (-40%)";
    } 

    // prezzo finale

    // const prezzoFinale = costoBiglietto.toFixed(2);


    // carrozza random

    const carrozza = Math.floor(Math.random() * 12) + 1;

    // output biglietto

    document.getElementById("outNome").innerText = nome;
    document.getElementById("outOfferta").innerText = offerta;
    document.getElementById("outCarrozza").innerText = carrozza;
    document.getElementById("outPrezzo").innerText = costoBiglietto.toFixed(2) + " €";
});


// Reset completo con Annulla
document.getElementById("btn-annulla").addEventListener("click", function(){
    document.getElementById("outNome").innerText = "";
    document.getElementById("outOfferta").innerText = "";
    document.getElementById("outCarrozza").innerText = "";
    document.getElementById("outPrezzo").innerText = "";
});