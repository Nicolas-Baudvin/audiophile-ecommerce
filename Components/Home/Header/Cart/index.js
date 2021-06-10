import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getItemsFromCart } from '../../../../utils/cartFunctions';
import PropTypes from 'prop-types';

const variants = {
    open: { opacity: 1, display: 'flex', flexDirection: 'column' },
    closed: { opacity: 0, flexDirection: 'column', transitionEnd: { display: 'none' } }
};

const Cart = ({ show, setShow }) => {
    const [cartItems, setCartItems] = useState([]);

    function calculTotal() {
        let result = 0;
        cartItems.forEach((item) => {
            result += parseInt(item.price) * item.qty;
        });
        return result;
    }

    function clearCart() {
        setCartItems([]);
        localStorage.setItem('cart', []);
    }

    useEffect(() => {
        setCartItems(getItemsFromCart());
    }, [show]);
    return (
        <motion.div animate={show ? 'open' : 'closed'} variants={variants} className="cart">
            <div className="cart-header">
                <h1 className="cart-title">Cart ({cartItems.length})</h1>
                <button onClick={clearCart} className="cart-button--transparent">
                    Remove all
                </button>
            </div>
            <div className="cart-content">
                {cartItems.length > 0 &&
                    cartItems.map((item, i) => (
                        <div key={i} className="cart-content__item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-content__item-text">
                                <h2 className="cart-content__item-name"> {item.name} </h2>
                                <b className="cart-content__item-price">$ {item.price} </b>
                            </div>
                            <div className="cart-content__item-qty">
                                <button className="cart-content__item-btn">-</button>
                                <b className="cart-content__item-qty"> {item.qty} </b>
                                <button className="cart-content__item-btn">+</button>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="cart-footer">
                <div className="cart-footer-content">
                    <h3>Total</h3>
                    <strong>$ {calculTotal()}</strong>
                </div>
                <button className="cart-footer-confirm">checkout</button>
                <button onClick={() => setShow(!show)} className="cart-footer-close">
                    Close
                </button>
            </div>
        </motion.div>
    );
};

Cart.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired
};

export default Cart;
