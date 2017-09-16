import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
    const { button, text } = styles;

    return (
        <TouchableOpacity style={button} onPress={onPress}>
            <Text style={text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        padding: 10,
        color: '#fff'
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ed8e46',
        backgroundColor: '#ed8e46',
        marginLeft: 5,
        marginRight: 5
    }
});

export default Button;
