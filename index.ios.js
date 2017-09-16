// iOS
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import SessionList from './src/components/SessionList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header text="IO Scanner" />
        <SessionList />
    </View>
);

AppRegistry.registerComponent('ioscanner', () => App);
