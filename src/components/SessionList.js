import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SessionDetail from '../components/SessionDetail';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: [] };
    }
    componentWillMount() {
        fetch('https://raw.githubusercontent.com/selvinortiz/ioscanner/master/data/sessions.json')
            .then((response) => (response.ok ? response.json() : this.state.sessions))
            .then((responseAsJson) => {
                this.setState({ sessions: responseAsJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderSessions() {
       return this.state.sessions.map((session) =>
           <SessionDetail key={session.title} session={session} />
       );
    }

    render() {
        return (
            <ScrollView>
                {this.renderSessions()}
            </ScrollView>
        );
    }
}

export default SessionList;
