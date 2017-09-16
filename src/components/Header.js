import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        height: 80,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4
    }
};

export default Header;
