'use strict'; //this improved error handling for React Native

//imports
var React = require('react-native');
var HomePage = require('./HomePage');
 
var {
	Text,
	View,
    AppRegistry,
    TabBarIOS,
    Component,
	Platform,
	TouchableHighlight,
	StyleSheet
   } = React; //destructuring assignment

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class ProjectRandom extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Project Random',
          component: HomePage,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('ProjectRandom', function() { return ProjectRandom });