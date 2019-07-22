import React, {Component, Fragment} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, StatusBar, } from 'react-native';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 0,
			b: 0,
		};
	}
	
	render() {
		const {a, b} = this.state;
		return (
			<Fragment>
			  <StatusBar barStyle="dark-content" />
			  <SafeAreaView
				style={{
					padding: 7,
					alignItems: 'center',
				}}>
				<TextInput
				  style={{
					  width: '100%',
					  borderWidth: 1,
					  borderColor: '#ececec',
				  }}
				  onChangeText={text => this.setState({a: parseInt(text) || 0})}>
				  {a}
				</TextInput>
				<Text style={styles.text}>+</Text>
				<TextInput
				  style={{
					  width: '100%',
					  borderWidth: 1,
					  borderColor: '#ececec',
				  }}
				  onChangeText={text => this.setState({b: parseInt(text) || 0})}>
				  {b}
				</TextInput>
				<Text style={styles.text}>{parseInt(a) + parseInt(b)}</Text>
			  </SafeAreaView>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		color: 'black',
		margin: 7,
	}
});

export default App;
