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

const SplashScreen = () => {
  const [invalidSubmit, setInvalidSubmit] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation();

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
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.backgroundImage}
      />
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

export default SplashScreen;
