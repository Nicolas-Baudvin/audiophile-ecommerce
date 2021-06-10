import PropTypes from 'prop-types';

const FeaturesBlock = ({ product }) => {
    return (
        <div className="product-block">
            <div className="product-block--aside">
                <h1 className="product-features-title">features</h1>
                <p className="product-features-desc"> {product.features.split('//')[0]} </p>
                <p className="product-features-desc">{product.features.split('//')[1]}</p>
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
    );
};

FeaturesBlock.propTypes = {
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

export default FeaturesBlock;
