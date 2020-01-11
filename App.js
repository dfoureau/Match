import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground , Animated, Easing} from 'react-native';
import logo from '../Match/images/logo.png';
import cercle from '../Match/images/cercle_eau2.png';

export default class App extends Component {

	state = {
		spinValue: new Animated.Value(0),
}

    componentDidMount() {
        Animated.timing(
            this.state.spinValue,
            {
                toValue: 1,
                duration: 6000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
    }


	render() {

		let spin = this.state.spinValue.interpolate({
		inputRange: [0,1],
		outputRange: ['0deg', '360deg']
		});

		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Animated.Image style={styles.cercle, {transform: [{rotate: spin}] }}
						source={cercle}>
					</Animated.Image>
					<View style={styles.insidelogo}>
						<ImageBackground source={logo} style={styles.logo}>
						</ImageBackground>
					</View>
				</View>
			</View>


		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	logo: {
			width:85,
			height:85,
			justifyContent: 'center',
			alignItems: 'center',
		},
	view : {
		    alignItems: 'center',
		    justifyContent: 'center',
		  },
	cercle: {
	        width:80,
	        height:80,
	      },
	insidelogo: {
					position: 'absolute',
			    top: 0,
			    bottom: 0,
			    left: 0,
			    right: 0,
			    justifyContent: 'center',
			    alignItems: 'center',
					zIndex:-1,
				}
});
