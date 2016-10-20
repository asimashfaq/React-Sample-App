/**
 * Created by asimashfaq on 10/20/16.
 */
'use strict';

import React, { Component } from 'react';
import {
    // AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
ActivityIndicatorIOS
} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
        showProgress:false
        }
    }


    render()  {
        return (
          <View style={styles.container}>
              <Text style={styles.welcome}>
                Login Screen
            </Text>
              <TextInput
                  onChangeText={(text)=>this.setState({username:text})}
                    onPress={this.onLoginPressed.bind(this)}
                  style={styles.input}
                  placeholder="Username"></TextInput>
              <TextInput
                  onChangeText={(text)=>this.setState({password:text})}
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true} ></TextInput>
              <TouchableHighlight
                  onPress={this.onLoginPressed.bind(this)}
                  style={styles.button}>

                  <Text style={styles.buttonText}>
                      Log in
                  </Text>
              </TouchableHighlight>
                <ActivityIndicatorIOS animating={this.state.showProgress}
                size="large"
                style={styles.loader}>
                </ActivityIndicatorIOS>
          </View>

        );
    }
    onLoginPressed() {
        console.log('Attempting to log in with username ' + this.state.username);
        this.setState({showProgress: true});

        if(this.props.onLogin){

            this.props.onLogin();

        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding:10
    },
    welcome: {
        fontSize: 20,
        // textAlign: '',
        margin: 10,
        paddingTop: 100
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input:{
        height:50,
        marginTop:10,
        padding:8,
        fontSize:18,
        borderWidth:1,
        borderColor:'#48bbec'

    },
    button:{
        height:50,
        backgroundColor:'#48bbec',
        alignSelf:'stretch',
        marginTop:10,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:22,
        color:'#FFF',
        alignSelf:'center'
    },
    loader: {
        marginTop:20
    }
});

