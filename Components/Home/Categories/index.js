import Categorie from './categorie';

const CategoriesData = [
    {
        src: '/img/shared/desktop/image-headphones.png',
        alt: 'headphones',
        title: 'headphones',
        route: '/'
    },
    {
        src: '/img/shared/desktop/image-speakers.png',
        alt: 'speakers',
        title: 'speakers',
        route: '/'
    },
    {
        src: '/img/shared/desktop/image-earphones.png',
        alt: 'earphones',
        title: 'earphones',
        route: '/'
    }
];

const Categories = () => {
    return (
        <div className="categories">
            {CategoriesData.map((cat, i) => (
                <Categorie key={i} cat={cat} />
            ))}
        </div>
    );
};

export default Categories;
