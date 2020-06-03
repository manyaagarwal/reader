import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { View, Text } from "react-native";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import AddBookForm from "./AddBookForm";

export default function AddBook() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={toggleOverlay}>
        <Image
          source={{
            uri:
              "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
          }}
          onPress={toggleOverlay}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={{}}>
        <AddBookForm />
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "#F5F5F5"
  },

  TouchableOpacityStyle: {
    width: 50,
    height: 50
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50
  }
});
