/* eslint-disable react/prop-types */
import '../Styles/header.scss';
import '../Styles/global.scss';
import '../Styles/vars.scss';
import '../Styles/footer.scss';
import '../Styles/Home/home.scss';
import '../Styles/Home/someproducts.scss';
import '../Styles/Home/desc.scss';
import '../Styles/Headphones/main.scss';
import '../Styles/loading.scss';
import '../Styles/product.scss';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingPage from '../Components/LoadingPage';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    useEffect(() => {
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
    });

    return loading ? (
        <LoadingPage />
    ) : (
        <Component {...pageProps} setLoading={setLoading} loading={loading} />
    );
}
