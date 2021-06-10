export const addToCart = (productToAdd) => {
    let products = getItemsFromCart();
    let isProductAlreadyInCart = false;
    if (products && products.length) {
        products = products.map((product) => {
            if (product._id === productToAdd._id) {
                product.qty += productToAdd.qty;
                isProductAlreadyInCart = true;
            }
            return product;
        });
        if (!isProductAlreadyInCart) {
            products.push(productToAdd);
        }
        return localStorage.setItem('cart', JSON.stringify(products));
    }
    return localStorage.setItem('cart', JSON.stringify([productToAdd]));
};

export const getItemsFromCart = () => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
};
