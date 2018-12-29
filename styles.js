import { StyleSheet } from 'react-native';

const DarkOliveGreen = '#556B2F';

export default StyleSheet.create({
	container: {
		marginTop: 25,
		padding: 10
	},
	header: {
		marginVertical: 20,
		fontSize: 24,
		textAlign: 'center',
		color: DarkOliveGreen
	},
	subNavItem: {
		margin: 2,
		padding: 5,
		backgroundColor: DarkOliveGreen
	},
	item: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600'
	},
	form: {
		textAlign: 'center',
		fontSize: 15
	},
	matchedRoute: {
		backgroundColor: 'red'
	}
});
