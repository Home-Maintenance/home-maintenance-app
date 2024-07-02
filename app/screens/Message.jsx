import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Message = ({navigation}) => {
  return (
    <View>
      {/* <Text>message</Text>
      <Button title='Click Here' onPress={()=> navigation.navigate('Chat')}/> */}
      <FlatList
      data={}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
