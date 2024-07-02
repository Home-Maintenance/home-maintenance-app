import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Chat = ({ navigation }) => {
  return (
    <View>
      <Text>chat</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
