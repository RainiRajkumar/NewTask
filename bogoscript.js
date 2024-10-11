function selectOffer(offerNumber) {
    const detailsElements = document.querySelectorAll('.details');
    detailsElements.forEach(detail => detail.style.display = 'none');

    document.getElementById(`details${offerNumber}`).style.display = 'block';
    updateTotalPrice(offerNumber);
}

function updateTotalPrice(offerNumber) {
    const prices = {1: 10, 2: 18, 3: 24};
    const totalPrice = prices[offerNumber] || 0;
    document.getElementById('total-price').innerText = `$${totalPrice}.00 USD`;
}

function addToCart() {
    alert('Item added to cart!');
}

window.onload = function() {
    const radios = document.querySelectorAll('input[name="offer"]');
    let selectedOffer = Array.from(radios).find(radio => radio.checked) || radios[0];

    if (!selectedOffer.checked) {
        selectedOffer.checked = true;
    }

    const offerNumber = selectedOffer.id.replace('radio', '');
    selectOffer(offerNumber);
};
