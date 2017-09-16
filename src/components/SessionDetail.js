import React from 'react';
import { View, Text } from 'react-native';

const SessionDetail = (props) => {
    return (
        <View> 
            <Text>{props.session.title}</Text>
        </View>
    );
};

export default SessionDetail;
