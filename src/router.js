import React from "react";
import { Platform, StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import SignUpView from "./views/signUp";
import SignInView from "./views/signIn";
import AppNavigator from "./views/appNavigator";
import SettingsView from "./views/settings";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

// views for signed out state
export const SignedOut = createStackNavigator({
    SignUp: {
        screen: SignUpView,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    },
    SignIn: {
        screen: SignInView,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});

// views for signed in state
export const SignedIn = createBottomTabNavigator(
    {
        AppNavigator: {
            screen: AppNavigator,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (<Icon name='home' size={30} color={tintColor} />)
            }
        },
        Settings: {
            screen: SettingsView,
            navigationOptions: {
                tabBarLabel: "Settings",
                tabBarIcon: ({ tintColor }) => (<Icon name='gear' size={30} color={tintColor} />)
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            // if user is signed in, go to SignedIn screen. otherwise, go to SignedOut screen.
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    ));
};