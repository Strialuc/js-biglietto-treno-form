/* inizializzo constanti */


const nome = document.getElementById("nome").value;
const km = parseFloat(document.getElementById("km").value);
const fascia = document.getElementById("fascia").value;
const pricePerKm = 0.21;



document.getElementById("element").addEventListener("submit", function() {

let costoBiglietto = km * pricePerKm;

if (fascia === "min" ) {

    costoBiglietto = (costoBiglietto * 0.8)

    console.log(costoBiglietto.toFixed(2));

} else if (fascia === "over") {
    costoBiglietto = (costoBiglietto * 0.6)

    console.log(costoBiglietto.toFixed(2));
} else 


console.log(costoBiglietto.toFixed(2));


});