import React from 'react';
import { View, Image, Text, Linking, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

const SessionDetail = ({ session }) => {
    const { title, speaker, slug, thumbnail } = session;
    const { image, header } = styles;
    const baseURL = 'https://kingdomadvisors.com/resources/';

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={image}
                        source={{ uri: thumbnail }}
                    />
                </View>
                <View style={header}>
                    <Text>{title}</Text>
                    <Text>by {speaker}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button
                    title="View Session"
                    onPress={() => Linking.openURL(baseURL + slug)}
                />
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
    },
    image: {
        width: 96,
        height: 96,
        padding: 10
    }
});

export default SessionDetail;
