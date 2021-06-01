import Header from '../Components/Home/Header';
import Footer from '../Components/Footer';
import Desc from '../Components/Home/Desc';
import Categories from '../Components/Home/Categories';
import Products from '../Components/Products';

import LoadingPage from '../Components/LoadingPage';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    earphones: [],
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return {
                ...state,
                earphones: action.payload,
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

const getEarphones = async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/earphones'
        });
        dispatch({ type: 'GET_PRODUCTS', payload: res.data.earphones });
    } catch (e) {
        console.log(e.response);
    }
};

const Earphones = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: 'LOADING', payload: true });
        getEarphones(dispatch);
    }, []);

    useEffect(() => {
        if (state.earphones.length) {
            dispatch({ type: 'LOADING', payload: false });
        }
    }, [state.earphones]);
    return state.loading ? (
        <LoadingPage />
    ) : (
        <div className="material">
            <Header />
            <h1 className="material-title">Earphones</h1>
            <Products state={state} />
            <Categories />
            <Desc />
            <Footer />
        </div>
    );
};

export default Earphones;
