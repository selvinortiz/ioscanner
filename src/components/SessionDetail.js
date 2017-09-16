import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

const SessionDetail = ({ session }) => {
    const { title, description, image } = session;
    const { imageStyles, headerStyles } = styles;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={imageStyles}
                        source={{ uri: image }}
                    />
                </View>
                <View style={headerStyles}>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
    },
    imageStyles: {
        width: 96,
        height: 96,
        padding: 10
    }
};
export default SessionDetail;
