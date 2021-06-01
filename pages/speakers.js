import Header from '../Components/Home/Header';
import Footer from '../Components/Footer';
import Desc from '../Components/Home/Desc';
import Categories from '../Components/Home/Categories';
import Products from '../Components/Products';

import LoadingPage from '../Components/LoadingPage';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    speakers: [],
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return {
                ...state,
                speakers: action.payload,
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

const getSpeakers = async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/speakers'
        });
        dispatch({ type: 'GET_PRODUCTS', payload: res.data.speakers });
    } catch (e) {
        console.log(e.response);
    }
};

const Speakers = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: 'LOADING', payload: true });
        getSpeakers(dispatch);
    }, []);

    useEffect(() => {
        if (state.speakers.length) {
            dispatch({ type: 'LOADING', payload: false });
        }
    }, [state.speakers]);
    return state.loading ? (
        <LoadingPage />
    ) : (
        <div className="material">
            <Header />
            <h1 className="material-title">Speakers</h1>
            <Products state={state} />
            <Categories />
            <Desc />
            <Footer />
        </div>
    );
};

export default Speakers;
