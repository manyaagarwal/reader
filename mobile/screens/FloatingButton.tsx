import React, { Component } from 'react';

import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class FloatingButton extends Component<{}> {

  SampleFunction=()=>{
      Alert.alert("Floating Button Clicked");
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
          <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                 style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor : '#F5F5F5'
  },

  TouchableOpacityStyle:{

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});