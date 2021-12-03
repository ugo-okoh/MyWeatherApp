import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: width,
        backgroundColor: '#f0f0f0',
        zIndex: 2,
        elevation: 2,
        alignItems: 'center',
    },
    layer1: {
        width: 0.85 * width,
        flexDirection: 'row',
        marginTop: 30,
    },
    backButton: {
        padding: 10,
    },
    textInputContainer: {
        width: 0.85 * width,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,

    },
    textInput: {
        fontStyle: 'italic',
        marginLeft: 10,
        fontSize: 16,
        width: '80%',
    },
    scrollView: {
        width: width,
        height: 0.74 * height,
        marginTop: 40,
        paddingBottom: 50,
        alignItems: 'center'
    },
    loader: {
        position: 'absolute',
        backgroundColor: '#f0f0f0',
        width: width,
        height: 0.74 * height,
        zIndex: 3,
    },
})