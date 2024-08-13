import React from "react";
import {TextInput} from "react-native";
const SmartCalendar = ({
    defaultDate
}) => {
    return (
        <TextInput
            value={defaultDate}
        />
    );
};

export default SmartCalendar;
