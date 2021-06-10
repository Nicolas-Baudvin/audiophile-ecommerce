import PropTypes from 'prop-types';
import { useState } from 'react';
import { addToCart } from '../../utils/cartFunctions';

const PresentationBlock = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        const productToAdd = { ...product, qty: quantity };
        addToCart(productToAdd);
    };

    return (
        <div className="product-block">
            <div className="product-block--horizontal">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-block--horizontal">
                {product.isNewProduct && <h3 className="product-item-isnew">new product</h3>}
                <h1 className="product-item-title">{product.name}</h1>
                <p className="product-item-desc">{product.desc}</p>
                <strong className="product-item-price">$ {product.price}</strong>
                <div className="product-item-purshase">
                    <div className="product-item-quantity">
                        <button onClick={() => setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)}>
                            -
                        </button>
                        <b> {quantity} </b>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button onClick={handleClick} className="product-item-add">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

PresentationBlock.propTypes = {
    product: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            desc: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            isNewProduct: PropTypes.bool.isRequired,
            price: PropTypes.string.isRequired,
            features: PropTypes.string.isRequired,
            inTheBox: PropTypes.array.isRequired,
            _id: PropTypes.string.isRequired
        })
    ])
};

export default PresentationBlock;
