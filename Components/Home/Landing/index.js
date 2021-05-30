import Link from 'next/link';

const LandingPage = () => {
    return (
        <div className="home-landing">
            <img className="home-landing-image" src="/img/home/desktop/image-hero.jpg" alt="" />
            <div className="home-landing-container">
                <h2 className="home-landing-subtitle">NEW PRODUCT</h2>
                <h1 className="home-landing-title">XX99 MARK II HEADPHONES</h1>
                <p className="home-landing-text">
                    Experience natural, lifelike audio and exceptional build quality made for the
                    passionate music enthusiast.
                </p>
                <Link href="/" className="home-landing-button">
                    SEE PRODUCT
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
