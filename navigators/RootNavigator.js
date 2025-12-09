import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        options={{ title: "Onboarding" }}
        name="Onboarding"
        component={OnboardingScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootNavigator;
