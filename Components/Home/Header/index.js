import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="header-title"
                    src="/img/shared/desktop/logo.svg"
                    alt="audiophile"
                />
            </Link>
            <nav className="header-nav">
                <Link href="/">Home</Link>
                <Link href="/headphones">Headphones</Link>
                <Link href="/">Speakers</Link>
                <Link href="/">Earphones</Link>
            </nav>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header-icon">
                <img src="/img/shared/desktop/icon-cart.svg" alt="" />
            </motion.div>
        </header>
    );
};

export default Header;
