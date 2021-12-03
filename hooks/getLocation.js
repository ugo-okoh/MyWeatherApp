import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_PROVIDER = "https://www.metaweather.com/api/";

const useSearchedLocation = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResults] = useState([]);
    const getResults = (text) => {
        setLoading(true);
        axios.get(`${API_PROVIDER}location/search/?query=${text}`)
            .then((results) => {
                setResults(results?.data)
            })
            .catch(error => { console.log(error.message) })
            .finally(() => {
                setLoading(false);
            })
    }
    return {
        loading,
        getLocationResults: getResults,
        locationResult: result,
        clearLocationSearchResults: () => {
            setResults([]);
        }
    }
}
export default useSearchedLocation;