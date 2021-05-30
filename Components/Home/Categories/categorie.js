import { motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

const variants = {
    open: { x: 10 },
    closed: { x: 0 }
};

const Categorie = ({ cat }) => {
    const [isHovered, setHovered] = useState(false);
    return (
        <div
            className="categories-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={cat.src} alt={cat.alt} className="categories-item-img" />
            <h3>{cat.title}</h3>
            <Link href={cat.route}>
                <a>
                    Shop{' '}
                    <motion.span animate={isHovered ? 'open' : 'closed'} variants={variants}>
                        {' >'}
                    </motion.span>
                </a>
            </Link>
        </div>
    );
};

Categorie.propTypes = {
    cat: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired
    }).isRequired
};

export default Categorie;
