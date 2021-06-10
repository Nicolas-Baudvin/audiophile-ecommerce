/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import FeaturesBlock from './FeaturesBlock';
import PresentationBlock from './PresentationBlock';

const Product = ({ state }) => {
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
                    <PresentationBlock product={product} />
                    <FeaturesBlock product={product} />
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
                price: PropTypes.string.isRequired,
                features: PropTypes.string.isRequired,
                inTheBox: PropTypes.array.isRequired,
                _id: PropTypes.string.isRequired
            })
        ])
    })
};

export default Product;
