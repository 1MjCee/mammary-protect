import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Register() {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Register Page</Text>
        <Link href="/home" style={styles.button}>
          Go Back Home
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#222",
  },
  button: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#333",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
