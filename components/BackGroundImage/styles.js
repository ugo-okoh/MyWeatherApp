import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        height: height,
        width: width,
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
    },
})