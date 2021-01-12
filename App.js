/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Crashes from 'appcenter-crashes'
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Button,
} from 'react-native';

import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
	return (
		<>
			<SafeAreaView>
				<View>
					<Text style={styles.footer}>Gorse Street</Text>
					<Button title="Crash"
						onPress={() => Crashes.generateTestCrash()}
					/>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
