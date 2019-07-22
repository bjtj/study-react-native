import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {

    static navigationOptions = {
		title: '홈 화면',
    };
    
    render() {

		const item = {
			name: 'TJ',
			category: 'Developer',
			ceo: '...',
		};
		
		return (
			<View style={styles.container}>
			  <TouchableOpacity
				onPress={() => this.props.navigation.navigate('Info', {item: item})}>
				<Text>정보 보기</Text>
			  </TouchableOpacity>
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
});
