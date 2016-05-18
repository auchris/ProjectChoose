'use strict'; //this improved error handling for React Native

//imports
var React = require('react-native');
var SearchBooks = require('./SearchBooks');
 
var {
	Text,
	View,
    ActivityIndicatorIOS,
    Component,
	TouchableHighlight,
	StyleSheet
   } = React; //destructuring assignment

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});

class HomePage extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		isLoading: false
	  };
	}
  render() {
	  var spinner = this.state.isLoading ?
		  ( <ActivityIndicatorIOS
			  size='large'/> ) :
		  ( <View/>);
    return (
      <View style={styles.container}>
			
        <Text style={styles.description}>
          Randomly decide on things to do!
        </Text>
        <Text style={styles.description}>
          Click the bottons below and get a suggestion.
        </Text>
			
		<View style={styles.flowRight}>
		  <TouchableHighlight style={styles.button}
			  underlayColor='#99d9f4'
			  onPress={this.booksButtonPressed.bind(this)}>
			<Text style={styles.buttonText}>Books</Text>
		  </TouchableHighlight>
		{spinner}
		</View>
			
      </View>
    );
  }
	
	onButtonPressed(){
		this.setState({isLoading: true});
	}
	
	booksButtonPressed(){
		this.onButtonPressed();
		this.props.navigator.push({
		  title: 'Book Search',
		  component: SearchBooks
		});
		this.setState({isLoading: false});
	}

}

module.exports = HomePage;

//  render() {
//    return (
//    <View style={styles.container}>
//      <TouchableHighlight
//        style={styles.button}
//        onPress={this.booksButtonPressed.bind(this)}>
//        <View>
//          <Text style={styles.buttonText}>Books</Text>
//        </View>
//      </TouchableHighlight>
//    </View>
//    );
//  }
//	booksButtonPressed(){
//		this.navigator.push({
//			title:'Book Search',
//			component: SearchBooks
//		})
//  }
//};