/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ state }) => {
    const [quantity, setQuantity] = useState(1);
    const { product } = state;
    return (
        <div className="product">
            {!product && (
                <p className="product-avert">
                    It seems that you have requested a product that doesn't exist anymore
                </p>
            )}
            {product && (
                <div className="product-container">
                    <div className="product-block">
                        <div className="product-block--horizontal">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-block--horizontal">
                            {product.isNewProduct && (
                                <h3 className="product-item-isnew">new product</h3>
                            )}
                            <h1 className="product-item-title">{product.name}</h1>
                            <p className="product-item-desc">{product.desc}</p>
                            <strong className="product-item-price">$ {product.price}</strong>
                            <div className="product-item-purshase">
                                <div className="product-item-quantity">
                                    <button
                                        onClick={() =>
                                            setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
                                        }>
                                        -
                                    </button>
                                    <b> {quantity} </b>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button className="product-item-add">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-block">
                        <div className="product-block--aside">
                            <h1 className="product-features-title">features</h1>
                            <p className="product-features-desc">
                                {' '}
                                {product.features.split('//')[0]}{' '}
                            </p>
                            <p className="product-features-desc">
                                {product.features.split('//')[1]}
                            </p>
                        </div>
                        <div className="product-block--aside">
                            <h1 className="product-features-title">in the box</h1>
                            <ul className="product-features-list">
                                {product.inTheBox.map((item, i) => (
                                    <li key={i}>
                                        <span>x{item.qty}</span> {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

Product.propTypes = {
    state: PropTypes.shape({
        product: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.shape({
                desc: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                isNewProduct: PropTypes.bool.isRequired,
                price: PropTypes.number.isRequired,
                features: PropTypes.string.isRequired,
                inTheBox: PropTypes.array.isRequired,
                _id: PropTypes.string.isRequired
            })
        ])
    })
};

export default Product;
