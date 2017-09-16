import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

const SessionDetail = ({ session }) => {
    const { title, description, image } = session;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={styles.imageStyles}
                        source={{ uri: image }}
                    />
                </View>
                <View style={styles.headerStyles}>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyles: {
        width: 96,
        height: 96
    }
};
export default SessionDetail;
