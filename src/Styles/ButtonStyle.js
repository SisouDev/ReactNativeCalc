import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#db8c9b',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4) * 3,
    }
});