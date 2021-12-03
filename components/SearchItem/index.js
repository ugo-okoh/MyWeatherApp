import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text, View, Image,
    Animated, TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from './styles';
import location from '../../assets/images/location.png';
import useLocationWeather from '../../hooks/getLocationWeather';
const SearchItem = ({
    data,
    setData,
    setLoading,
    setText,
    clearLocationSearchResults,
}) => {
    const { loading, getLocationResults, locationResult, clearLocationResult } = useLocationWeather();
    useEffect(() => {
        setLoading(loading);
    }, [loading])

    useEffect(() => {
        if (locationResult) {
            setData({
                title: data?.title,
                ...locationResult
            });
            clearLocationSearchResults();
            setText('');
            clearLocationResult();
        }
    }, [locationResult])
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            getLocationResults(data?.woeid);
            setText(data?.title)
        }}>
            <Image
                source={{ uri: Image.resolveAssetSource(location).uri }}
                resizeMode={'contain'}
                style={{
                    height: 29,
                    width: 29,
                }} />
            <Text style={styles.locationText}>{data?.title}</Text>
        </TouchableOpacity>
    )
};
export default SearchItem;