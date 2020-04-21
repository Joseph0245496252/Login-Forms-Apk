import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LoginScreen from './LoginScreen'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emil:"",
      password:""
      // names:["Kwajo", "Kwame", "Kwasi", "Kofi", "Yaw"]
       
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default App; 
