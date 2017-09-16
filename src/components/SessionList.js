import React, { Component } from 'react';
import { View } from 'react-native';
import SessionDetail from '../components/SessionDetail';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: [] };
    }
    componentWillMount() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    sessions: responseJson.sessions
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderSessions() {
        return this.state.sessions.map(session =>
            <SessionDetail key={session.title} session={session}/>
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderSessions()}
            </View>
        );
    }
}

export default SessionList;
