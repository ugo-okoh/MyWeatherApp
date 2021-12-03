import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import styles from './styles';
import clear from '../../assets/images/clear.jpg';
import snow from '../../assets/images/snow.jpg';
import sleet from '../../assets/images/sleet.jpg';
import hail from '../../assets/images/hail.jpg';
import thunderstorm from '../../assets/images/thunderstorm.jpg';
import heavyrain from '../../assets/images/heavyRain.jpg';
import lightrain from '../../assets/images/lightRain.jpg';
import heavycloud from '../../assets/images/heavyCloud.jpg';
import lightcloud from '../../assets/images/lightCloud.jpg';
const BackgroundImage = ({ value }) => {
    let URI;
    switch (value) {
        case 'c': {
            URI = Image.resolveAssetSource(clear).uri;
        } break;
        case 'sn': {
            URI = Image.resolveAssetSource(snow).uri;
        } break;
        case 'sl': {
            URI = Image.resolveAssetSource(sleet).uri;
        } break;
        case 'h': {
            URI = Image.resolveAssetSource(hail).uri;
        } break;
        case 't': {
            URI = Image.resolveAssetSource(thunderstorm).uri;
        } break;
        case 'hr': {
            URI = Image.resolveAssetSource(heavyrain).uri;
        } break;
        case 'lr': {
            URI = Image.resolveAssetSource(lightrain).uri;
        } break;
        case 's': {
            URI = Image.resolveAssetSource(lightrain).uri;
        } break;
        case 'hc': {
            URI = Image.resolveAssetSource(heavycloud).uri;
        } break;
        case 'lc': {
            URI = Image.resolveAssetSource(lightcloud).uri;
        } break;
        default: {
            URI = Image.resolveAssetSource(clear).uri;
        }
    };
    return <Image
        source={{ uri: URI }}
        resizeMode={'cover'}
        style={styles.container} />
};
export default BackgroundImage;