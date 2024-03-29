
import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ListView
} from 'react-native'
import FitImage from 'react-native-fit-image';

export default class YourComponent extends Component {
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
		dataSource: ds.cloneWithRows(_.range(25)),
	  };
	}
	render() {
		return (
			<View style={styles.container}>
				<FitImage
					source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
					style={styles.fitImage}
				/>

				{/* // draws image to fit inherited space automatically and disables loading indicator */}
				<FitImage
					indicator={false} // disable loading indicator
					indicatorColor="white" // react native colors or color codes like #919191
					indicatorSize="large" // (small | large) or integer
					source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
					style={styles.fitImage}
				/>

				{/* // draws image to fit inherited space automatically, even when screen is rotated. */}
				<FitImage
					source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
					originalWidth={400}
					originalHeight={400}
					style={styles.fitImage}
				/>

				{/* // could use resizeMode */}
				<FitImage
					resizeMode="contain"
					source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
				/>

				{/* // or draws image to specific size like Image component. */}
				<FitImage
					source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
					style={styles.fitImageWithSize}
				/>

				{/* // draws local image (currently, it does not support responsive) */}
				<FitImage
					source={require('fit-image.png')}
					style={styles.fitImageWithSize}
				/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});