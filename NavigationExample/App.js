/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

// navigation
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import InfoScreen from './InfoScreen';


// Navigator
const AppNavigator = createStackNavigator(
    {
		Home: HomeScreen,
		Info: {
			screen: InfoScreen,
			navigationOptions: {
				title: 'Info',
			}
		},
    },
    {
		initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
		return <AppContainer />;
    }
}
