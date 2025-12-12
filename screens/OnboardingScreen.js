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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const showAlert = () => {
  Alert.alert("Thanks for subscribing, stay tuned!");
};

const OnboardingScreen = ({ navigation }) => {
  const [invalidSubmit, setInvalidSubmit] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState(false);
  // const navigation = useNavigation();

  const completeOnboarding = async () => {
    updateStatePreferences(true);
  };

  const updateStatePreferences = async (isOnboardingCompleted) => {
    try {
      await AsyncStorage.setItem(
        "onboardingCompleted",
        JSON.stringify(isOnboardingCompleted)
      );
      await AsyncStorage.setItem("userName", JSON.stringify(name));
    } catch (e) {
      console.warn("Failed to update onboarding flag:", e);
    }
  };

  const checkEmail = (userEmail) => {
    setEmail(userEmail);
    // validateFields();
  };

  const checkName = (userName) => {
    setName(userName);
    // validateFields();
  };

  function validateFields() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValidated = false;
    let nameValidated = false;

    emailRegex.test(email) ? (emailValidated = true) : !emailValidated;
    name.length > 0 ? (nameValidated = true) : !nameValidated;
    setErrorEmail(!emailValidated);

    nameValidated && emailValidated
      ? setInvalidSubmit(false)
      : setInvalidSubmit(true);
  }
  React.useEffect(() => {
    validateFields();
  }, [name, email]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-yellow-big.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.containerRequest}>
        <Text style={styles.headerText}>Let us get to know you</Text>
        <Text style={styles.regularText}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Type your first name"
          value={name}
          onChangeText={checkName}
        ></TextInput>
        <Text style={styles.regularText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="email-address"
          placeholder="Type your email"
          value={email}
          onChangeText={checkEmail}
        ></TextInput>
        {errorEmail ? (
          <Text style={styles.regularText}>Set a valid email address</Text>
        ) : (
          <Text></Text>
        )}
      </View>
      <Pressable
        disabled={invalidSubmit}
        style={invalidSubmit ? styles.disabledButton : styles.button}
        onPress={() => completeOnboarding()}
      >
        <Text style={styles.buttonText}>Next</Text>
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

export default OnboardingScreen;
