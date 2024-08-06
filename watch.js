document.querySelector('.add-to-cart-button').addEventListener('click', () => {
    let cartCount = document.querySelector('#cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
});
