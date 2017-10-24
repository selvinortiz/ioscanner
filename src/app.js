// // iOS
// import React from 'react';
// import { Linking, View } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import Header from './components/Header';
//
// const App = () => (
//     <View style={{ flex: 1 }}>
//         <Header text="IO Scanner" />
//         <QRCodeScanner
//             title="Scan Session"
//             onRead={(e) => {
//                 Linking
//                     .openURL(e.data)
//                     .catch(error => console.error(error));
//             }}
//         />
//     </View>
// );
//
// export default App;
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    NavigatorIOS,
    TouchableOpacity,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
    onSuccess(e) {
        Linking.openURL(e.data).catch(error => console.error('An error occurred', error));
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: QRCodeScanner,
                    title: 'Scan Code',
                    passProps: {
                        onRead: this.onSuccess.bind(this),
                        topContent: (
                            <Text style={styles.centerText}>
                                Go to
                                <Text style={styles.textBold}>Wikipedia.org/wiki/QR_code</Text>
                                on your computer and scan the QR code.
                            </Text>
                        ),
                        bottomContent: (
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        ),
                    },
                }}
                style={{ flex: 1 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },

    textBold: {
        fontWeight: '500',
        color: '#000',
    },

    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },

    buttonTouchable: {
        padding: 16,
    },
});

export default ScanScreen;
