import React, { Component } from 'react';
import { createRootNavigator } from "./router";
import NavigationService from './services/navigationService';

class RouterNavigator extends Component {
    componentDidMount() {
    }

    render() {
        if (this.props.loading) return null;

        const Layout = createRootNavigator();
        return (
            <Layout ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
        );
    }
};

export default RouterNavigator