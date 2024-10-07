// Gestion de stock
let stockLevel = 100;

function gererStock() {
    const action = prompt("Souhaitez-vous ajouter ou retirer du stock? (entrez 'ajouter' ou 'retirer')");
    const quantite = parseInt(prompt("Entrez la quantité:"));

    if (action === "ajouter") {
        stockLevel += quantite;
    } else if (action === "retirer") {
        if (stockLevel - quantite < 0) {
            alert("Quantité invalide, vous ne pouvez pas retirer plus que le stock disponible !");
        } else {
            stockLevel -= quantite;
        }
    } else {
        alert("Action invalide, veuillez entrer 'ajouter' ou 'retirer'.");
    }

    document.getElementById('stockLevel').textContent = stockLevel;
    document.getElementById('stockMessage').style.color = stockLevel > 0 ? 'green' : 'red';
}

// Facturation
function genererFacture() {
    const produit = document.getElementById("produit").value;
    const prix = parseFloat(document.getElementById("prix").value);
    const quantite = parseInt(document.getElementById("quantite").value);

    if (produit && prix && quantite) {
        const total = prix * quantite;
        document.getElementById('factureMessage').textContent = `Facture: ${quantite}x ${produit} - Total: ${total.toFixed(2)}€`;
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Analyse de la performance
function afficherRapport() {
    const performance = Math.floor(Math.random() * 100) + 1; // Exemple aléatoire de performance
    document.getElementById('rapportMessage').textContent = `Performance actuelle: ${performance}% de la production est en ligne avec les objectifs.`;
}
