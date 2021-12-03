import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    container_: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
        elevation: 1,
    },
    layer1: {
        width: 0.9 * width,
        //backgroundColor: 'red',
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    layer1TextContainer: {

    },
    layer1Text1: {
        fontSize: 18,
        fontWeight: "500",
    },
    layer1Text2: {
        fontSize: 18,
        marginTop: 4,
        fontWeight: "700",
    },
    layer2: {
        width: 0.9 * width,
        //backgroundColor: 'green',
        borderBottomWidth: 10,
        paddingBottom: 20,
    },
    layer2_: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    mainCont: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    mainTemp: {
        fontSize: 90,
        fontWeight: "700",
        //backgroundColor: 'red',
    },
    degree: {
        fontSize: 30,
        //backgroundColor: 'red',
        fontWeight: "300",
        paddingBottom: 13,
        marginLeft: 7,
    },
    lowHighContainer: {
        justifyContent: 'space-between'
    },
    lowHighText: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 7,
    },
    description: {
        marginTop: 10,
        fontSize: 26,
        fontWeight: "300",
        marginBottom: 30,
    },
    menu: {
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
    },
    arrowWithDegrees: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});