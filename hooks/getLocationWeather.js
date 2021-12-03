import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_PROVIDER = "https://www.metaweather.com/api/";

const useLocationWeather = () => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const getResults = (text_) => {
        setLoading(true);
        setText(text_);
    }
    useEffect(() => {
        if (loading && text !== '') {
            axios.get(`${API_PROVIDER}location/${text}`)
                .then((results) => {
                    const resultArray = results?.data?.consolidated_weather;
                    setResult(resultArray[0])
                })
                .catch(error => { console.log(error.message) })
                .finally(() => {
                    setLoading(false);
                    setText('');
                })
        }
    }, [text, loading])
    return {
        loading,
        getLocationResults: getResults,
        locationResult: result,
        clearLocationResult: () => {
            setResult(null);
        }
    }
}
export default useLocationWeather;