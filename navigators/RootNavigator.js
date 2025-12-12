import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [statePreferences, setStatePreferences] = React.useState({
    isOnboardingCompleted: false,
  });

  React.useEffect(() => {
    const loadPrefs = async () => {
      try {
        const stored = await AsyncStorage.getItem("onboardingCompleted");
        const parsed = stored ? JSON.parse(stored) : false;
        setStatePreferences((prev) => ({
          ...prev,
          isOnboardingCompleted: parsed,
        }));
      } catch (e) {
        console.warn("Failed to read onboarding flag:", e);
      }
    };
    loadPrefs();
  }, [statePreferences]);

  return (
    <Stack.Navigator>
      {statePreferences.isOnboardingCompleted ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </>
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
