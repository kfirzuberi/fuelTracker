import React, { Component } from 'react';
import { createRootNavigator } from "./router";
import NavigationService from './services/navigationService';
import { connect } from 'react-redux';
import { watchAuthStateChangedDispatcher } from "./dispatchers/auth";

class RouterNavigator extends Component {
    componentDidMount() {
        this.props.watchAuthStateChangedDispatcher();
    }

    render() {
        if (this.props.loading) return null;

        const Layout = createRootNavigator(this.props.user);
        return (
            <Layout ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
        );
    }
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        loading: state.auth.loading
    };
}

const mapDispatchToProps = dispatch => ({
    watchAuthStateChangedDispatcher: () => dispatch(watchAuthStateChangedDispatcher())
})

export default connect(mapStateToProps, mapDispatchToProps)(RouterNavigator)