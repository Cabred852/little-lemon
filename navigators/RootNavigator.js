import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SplashScreen from "../screens/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const [statePreferences, setStatePreferences] = React.useState({
  isLoading: false,
  isOnboardingCompleted: false,
});

const updateStatePreferences = async (statePreferences) => {
  try {
    const jsonValue = JSON.stringify(statePreferences);
    await AsyncStorage.setItem("preferences", jsonValue);
  } catch (e) {}
};
// need to call the function above to update preferences in OnBoardingScreen

React.useEffect(() => {
  async () => {
    try {
      const storedValues = await AsyncStorage.getItem("preferences");
      const parsed = JSON.parse(storedValues);
      setStatePreferences(parsed);
    } catch (e) {}
  };
}, []);

clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // Handle error
  }
};

const RootNavigator = () => {
  if (statePreferences.isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {statePreferences.isOnboardingCompleted ? (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
