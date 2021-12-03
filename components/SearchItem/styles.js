import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width: 0.85 * width,
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 15,
        fontSize: 16,
        //fontStyle: 'italic',
        fontWeight: '300',
    },
});