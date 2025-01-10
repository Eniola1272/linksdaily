import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "../screens/Signup";
import Signin from "../screens/Signin";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
  <>
    <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  </>
  )
}
