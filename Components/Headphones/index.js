import PropTypes from 'prop-types';

const HeadphonesProducts = ({ state }) => {
    return (
        <div className="products">
            {state.headphones.length > 0 &&
                state.headphones.map((headphone, i) => (
                    <div key={i} className="products-item">
                        {i !== 1 && (
                            <img
                                src={headphone.image}
                                alt={headphone.name}
                                width={540}
                                height={560}
                            />
                        )}
                        <div className="products-item-text">
                            {headphone.isNewProduct && (
                                <h3 className="products-item-new">new product</h3>
                            )}
                            <h1 className="products-item-title"> {headphone.name} </h1>
                            <p className="products-item-desc"> {headphone.desc} </p>
                            <button className="products-item-button">See product</button>
                        </div>
                        {i === 1 && (
                            <img
                                src={headphone.image}
                                alt={headphone.name}
                                width={540}
                                height={560}
                            />
                        )}
                    </div>
                ))}
        </div>
    );
};

HeadphonesProducts.propTypes = {
    state: PropTypes.shape({
        headphones: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    })
};

export default HeadphonesProducts;
