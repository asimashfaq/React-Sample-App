/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Login';

export default class secondProject extends Component {

  constructor(props) {
    super(props);
    this.state= {isLoggedIn:false};
    this.onLogin = this.onLogin.bind(this);
  }

  render() {
    if(this.state.isLoggedIn){
      return (
          <View><Text>New Page</Text></View>
      );
    }
    else{
      return (
          <Login onLogin={this.onLogin}/>
      );
    }
    

  }
  onLogin(){
    console.log("Logged In");
     this.setState(
         {
           isLoggedIn: true
         }
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('secondProject', () => secondProject);
