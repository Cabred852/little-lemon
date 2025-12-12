import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [boardingCompleted, setBoardingCompleted] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const navigation = useNavigation();

  React.useEffect(() => {
    const loadPrefs = async () => {
      try {
        const keys = ["onboardingCompleted", "userName", "userEmail"];
        const stored = await AsyncStorage.multiGet(keys);
        const data = Object.fromEntries(stored);
        const parsedName = JSON.parse(data["userName"] ?? "");
        const parsedEmail = JSON.parse(data["userEmail"] ?? "N/A");
        setBoardingCompleted(JSON.parse(data["onboardingCompleted"]) ?? false);
        setUserName(parsedName);
        setUserEmail(parsedEmail);
      } catch (e) {
        console.warn("Failed to read onboarding flag:", e);
      }
    };
    loadPrefs();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-yellow-big.jpg")}
        style={styles.backgroundImage}
      />
      <Text>Welcome {userName}!</Text>
      <Text>Your Email is {userEmail}!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
  },
  containerRequest: {
    padding: 20,
    backgroundColor: "#A0A0A0",
  },
  headerText: {
    fontSize: 24,
    margin: 20,
    marginBottom: 100,
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 20,
    backgroundColor: "green",
    borderRadius: 10,
  },
  buttonText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 25,
  },
  disabledButton: {
    backgroundColor: "#A0A0A0",
    opacity: 0.6,
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 20,
    borderRadius: 10,
    width: 100,
    alignSelf: "flex-end",
  },
  backgroundImage: {
    width: "100%",
    height: 100,
    padding: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default Home;
