import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import SplashScreen from "../screens/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {state.isOnboardingCompleted ? (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
