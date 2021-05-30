import Link from 'next/link';

const someProductsData = [
    {
        pattern: '/img/home/desktop/pattern-circles.svg',
        className: 'someproducts-item text pattern',
        productImg: {
            src: '/img/home/desktop/image-speaker-zx9.png',
            alt: 'zx9',
            className: 'products-zx9'
        },
        desc: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
        title: 'ZX9 SPEAKER',
        textClassName: 'someproducts-item-text',
        route: '/'
    },
    {
        pattern: '/img/home/desktop/image-speaker-zx7.jpg',
        className: 'someproducts-item',
        productImg: { src: '', alt: '' },
        desc: '',
        title: 'ZX7 SPEAKER',
        textClassName: 'someproducts-item-notext',
        route: '/'
    },
    {
        pattern: '',
        className: 'someproducts-item',
        productImg: {
            src: '/img/home/desktop/image-earphones-yx1.jpg',
            alt: 'yx1',
            className: 'someproducts-item-img'
        },
        desc: '',
        title: 'YX1 EARPHONES',
        textClassName: 'someproducts-item-notext',
        route: '/'
    }
];

const SomeProducts = () => {
    return (
        <div className="someproducts">
            {someProductsData.map((product, i) => (
                <div
                    className={product.className}
                    style={{ backgroundImage: `url('${product.pattern || ''}')` }}
                    key={i}>
                    {product.productImg.src && (
                        <img
                            className={product.productImg.className}
                            src={product.productImg.src}
                            alt={product.productImg.alt}
                        />
                    )}
                    <div className={product.textClassName}>
                        <h1>{product.title}</h1>
                        {product.desc && <p>{product.desc}</p>}
                        <Link href={product.route}>
                            <a> see product </a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SomeProducts;
