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

const showAlert = () => {
  Alert.alert("Thanks for subscribing, stay tuned!");
};

const OnboardingScreen = () => {
  const [invalidSubmit, setInvalidSubmit] = React.useState(true);
  const [email, setEmail] = React.useState("");

  const checkEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(userEmail);
    emailRegex.test(userEmail)
      ? setInvalidSubmit(false)
      : setInvalidSubmit(true);
  };
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
          keyboardType="email-address"
          placeholder="Type your first name"
          value={email}
          onChangeText={checkEmail}
        ></TextInput>
        <Text style={styles.regularText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="email-address"
          placeholder="Type your email"
          value={email}
          onChangeText={checkEmail}
        ></TextInput>
      </View>
      <Pressable
        disabled={invalidSubmit}
        style={invalidSubmit ? styles.disabledButton : styles.button}
        onPress={() => showAlert()}
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
