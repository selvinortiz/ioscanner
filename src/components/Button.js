import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.textStyles}>Buy Now</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyles: {
        flex: 1,
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        padding: 10,
        color: '#007aff'
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10
    }
};
export default Button;
