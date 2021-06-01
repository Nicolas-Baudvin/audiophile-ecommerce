import Header from '../Components/Home/Header';
import Footer from '../Components/Footer';
import Desc from '../Components/Home/Desc';
import Categories from '../Components/Home/Categories';
import HeadphonesProducts from '../Components/Headphones';

import LoadingPage from '../Components/LoadingPage';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    headphones: [],
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return {
                ...state,
                headphones: action.payload,
                loading: false
            };
        }
        case 'LOADING': {
            return {
                ...state,
                loading: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const getHeadphones = async (dispatch) => {
    const res = await axios({
        method: 'GET',
        url: '/api/headphones'
    });
    dispatch({ type: 'GET_PRODUCTS', payload: res.data.headphones });
};

const Headphones = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: 'LOADING', payload: true });
        getHeadphones(dispatch);
    }, []);

    useEffect(() => {
        if (state.headphones.length) {
            dispatch({ type: 'LOADING', payload: false });
        }
    }, [state.headphones]);
    return state.loading ? (
        <LoadingPage />
    ) : (
        <div className="headphones">
            <Header />
            <h1 className="headphones-title">Headphones</h1>
            <HeadphonesProducts state={state} />
            <Categories />
            <Desc />
            <Footer />
        </div>
    );
};

export default Headphones;
