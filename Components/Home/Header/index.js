import Link from 'next/link';
import Cart from './Cart/index';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);
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
                <Link href="/speakers">Speakers</Link>
                <Link href="/earphones">Earphones</Link>
            </nav>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header-icon"
                onClick={() => setShow(!show)}>
                <img src="/img/shared/desktop/icon-cart.svg" alt="" />
            </motion.div>
            <Cart show={show} setShow={setShow} />
        </header>
    );
};

export default Header;
