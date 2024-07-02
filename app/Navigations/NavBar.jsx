import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Jobs from '../screens/Jobs'
import MyStuff from '../screens/MyStuff'
import Message from '../screens/Message'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chat from '../screens/Chat';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MessageStack = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }} style={styles.stackBar}>
    <Stack.Screen name="Messages" component={Message} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
);

export default function NavBar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12
              }}
            >
              Jobs
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="toolbox-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyStuffs"
        component={MyStuff}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12 }}>MyStuffs</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              tintColor={color}
              source={require("../../assets/Images/drilling-machine.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12 }}>Message</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

})