import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../Components/Footer';
import Desc from '../../Components/Home/Desc';
import Header from '../../Components/Home/Header';
import Product from '../../Components/Product';
import axios from 'axios';

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT': {
            return {
                ...state,
                product: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const initialState = {
    product: false
};

const getHeadphoneProduct = async (params, dispatch) => {
    try {
        const res = await axios({
            url: `/api/headphones/${params.id}`,
            method: 'GET'
        });
        dispatch({ type: 'GET_PRODUCT', payload: res.data.product || false });
    } catch (e) {
        console.log(e);
        dispatch({ type: 'ERROR', payload: '404 not found' });
    }
};

const Headphone = () => {
    const router = useRouter();
    const params = router.query;
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(async () => {
        if (params.id) {
            getHeadphoneProduct(params, dispatch);
        }
    }, [params.id]);

    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <div className="material">
            <Header />
            <Product state={state} />
            <Desc />
            <Footer />
        </div>
    );
};

export default Headphone;
