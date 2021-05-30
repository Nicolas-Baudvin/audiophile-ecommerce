import HomePage from '../Components/Home';
import Header from '../Components/Home/Header';
import Head from 'next//head';
import SomeProducts from '../Components/Home/SomeProducts';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <HomePage />
            <SomeProducts />
        </div>
    );
}
