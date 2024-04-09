async function getCryptoPrice() {
    const cryptoInput = document.getElementById('cryptoInput').value.trim().toLowerCase();
    const priceDisplay = document.getElementById('priceDisplay');

    if (!cryptoInput) {
        priceDisplay.innerHTML = 'Please enter a cryptocurrency.';
        return;
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoInput}&vs_currencies=cad`);
        const data = await response.json();

        if (data[cryptoInput] && data[cryptoInput].cad) {
            priceDisplay.innerHTML = `${cryptoInput.toUpperCase()} Price: $${data[cryptoInput].cad}`;
            priceDisplay.style.display = 'block'; 
        } else {
            priceDisplay.innerHTML = `Price for ${cryptoInput.toUpperCase()} not found.`;
        }
    } catch (error) {
        console.error('Error fetching crypto price:', error);
        priceDisplay.innerHTML = 'Error fetching crypto price. Please try again later.';
    }
}