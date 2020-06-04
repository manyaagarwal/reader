import React, { useState, useCallback } from "react";
import { View, GestureResponderEvent } from "react-native";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import AddBookForm from "./AddBookForm";
import { Portal, Modal } from "react-native-paper";

export default function AddBook(props) {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <Image
          source={{
            uri:
              "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "#F5F5F5",
  },

  Portal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  TouchableOpacityStyle: {
    width: 50,
    height: 50,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default AddBook;
