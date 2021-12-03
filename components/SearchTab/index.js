import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Dimensions, View, Image,
    Animated, TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from './styles';
import back from '../../assets/images/back.png';
import search from '../../assets/images/search.png';
import SearchItem from '../SearchItem';
import { ScrollView } from 'react-native-gesture-handler';
import useSearchedLocation from '../../hooks/getLocation';
import _ from 'lodash';
import { MaterialIndicator } from 'react-native-indicators';

const SearchTab = ({
    animatedValue,
    closeAnimate,
    setData,
}) => {
    const { getLocationResults, locationResult, clearLocationSearchResults } = useSearchedLocation();
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    useEffect(() => {
        setResults(locationResult);
    }, [locationResult]);
    useEffect(() => {
        if (value.length < 3 || animatedValue?.__getValue() > 50) return;
        const debouncerGetLocation = _.debounce(() => {
            getLocationResults(value);
        }, 1500);
        debouncerGetLocation();
    }, [value]);
    const center = loading ? { justifyContent: 'center', alignItems: 'center' } : {};
    return (
        <Animated.View style={[styles.container, { left: animatedValue }]}>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <View style={styles.layer1}>
                        <TouchableOpacity style={styles.backButton}
                            onPress={() => {
                                closeAnimate();
                                setValue('');
                                clearLocationSearchResults();
                            }}>
                            <Image
                                source={{ uri: Image.resolveAssetSource(back).uri }}
                                resizeMode={'contain'}
                                style={{
                                    height: 23,
                                    width: 13.5,
                                }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(search).uri }}
                            resizeMode={'contain'}
                            style={{
                                height: 20,
                                width: 20,
                                marginLeft: 15,
                            }} />
                        <TextInput
                            style={styles.textInput}
                            value={value}
                            onChangeText={(value) => { setValue(value) }}
                            placeholder={'Search for a location'}
                        />

                    </View>
                    <View style={[styles.scrollView, center]}>
                        {loading && <View style={styles.loader}>
                            <MaterialIndicator color={"#ffd446"} size={50} style={{ paddingBottom: 250 }} />
                        </View>}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {results.length != 0 && results.map((value, index) => {
                                return <SearchItem
                                    setData={setData}
                                    data={value}
                                    key={index}
                                    setLoading={setLoading}
                                    setText={setValue}
                                    clearLocationSearchResults={() => {
                                        setResults([]);
                                        clearLocationSearchResults();
                                    }}
                                />
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Animated.View >
    )
};
export default SearchTab;