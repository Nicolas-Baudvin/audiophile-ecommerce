/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block">
                <img src="/img/shared/desktop/logo.svg" alt="audiophile" />
                <p className="footer-block-text">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                    of music lovers and sound specialists who are devoted to helping you get the
                    most out of personal audio. Come and visit our demo facility - we’re open 7 days
                    a week.
                </p>
                <p className="footer-block-text">Copyright 2021. All Rights Reserved</p>
            </div>
            <div className="footer-block">
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/headphones">Headphones</Link>
                    <Link href="/">Speakers</Link>
                    <Link href="/">Earphones</Link>
                </nav>
                <div className="footer-block-social">
                    <AiFillFacebook />
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
