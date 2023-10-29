import React from "react";
import {
    Text,
    TouchableHighlight
} from 'react-native';
import ButtonStyle from "../Styles/ButtonStyle";

export default (props) => {
    const stylesButton = [ButtonStyle.button];
    if(props.double) stylesButton.push(ButtonStyle.buttonDouble);
    
    if(props.triple) stylesButton.push(ButtonStyle.buttonTriple);
    
    if(props.operation) stylesButton.push(ButtonStyle.operationButton);
    
    return(
        <TouchableHighlight
            onPress={() => props.onClick(props.label)}
        >
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}