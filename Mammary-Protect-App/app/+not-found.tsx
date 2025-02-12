import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";

export default function () {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.image}
    >
      <Stack.Screen options={{ title: "Opps! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to Home Screen
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fafafa",
  },
  button: {
    color: "#fafafa",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
