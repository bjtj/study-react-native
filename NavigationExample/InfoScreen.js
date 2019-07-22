import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class InfoScreen extends Component<Props> {
    
    render() {

		const item = this.props.navigation.getParam('item');
		
		return (
			<View style={styles.container}>
			  <Text style={styles.text}>Name: {item.name}</Text>
			  <Text style={styles.text}>Category: {item.category}</Text>
			  <Text style={styles.text}>CEO: {item.ceo}</Text>
			</View>
		);
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
    },
    text: {
		width: '50%',
		color: 'black',
    }
});
