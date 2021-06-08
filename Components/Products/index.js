import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Products = ({ state }) => {
    const router = useRouter();
    const categorie = router.pathname.split('/')[1];
    return (
        <div className="products">
            {state[categorie].length > 0 &&
                state[categorie].map((product, i) => (
                    <div key={i} className="products-item">
                        {i !== 1 && (
                            <img src={product.image} alt={product.name} width={540} height={560} />
                        )}
                        <div className="products-item-text">
                            {product.isNewProduct && (
                                <h3 className="products-item-new">new product</h3>
                            )}
                            <h1 className="products-item-title"> {product.name} </h1>
                            <p className="products-item-desc"> {product.desc} </p>
                            <Link href={`/${categorie}/${product._id}`}>
                                <button className="products-item-button">See product</button>
                            </Link>
                        </div>
                        {i === 1 && (
                            <img src={product.image} alt={product.name} width={540} height={560} />
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
