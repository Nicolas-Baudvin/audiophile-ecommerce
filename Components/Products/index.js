import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Products = ({ state }) => {
    const router = useRouter();
    const categorie = router.pathname.split('/')[1];
    return (
        <div className="products">
            {state[categorie].length > 0 &&
                state[categorie].map((headphone, i) => (
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

Products.propTypes = {
    state: PropTypes.shape({
        headphones: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        speakers: PropTypes.array,
        earphones: PropTypes.array
    })
};

export default Products;
