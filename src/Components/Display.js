import React from "react";
import {
     Text,
     View
} from "react-native";
import DisplayStyle from "../Styles/DisplayStyle";


export default (props) => {
    return(
        <View style={DisplayStyle.display}>
            <Text 
                style={DisplayStyle.displayValue}
                numberOfLines={1}    
            >
                {props.value}
            </Text>

        </View>
    )
}