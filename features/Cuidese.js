import React from "react";
import { StyleSheet, View, Image, Animated } from "react-native";

const Cuidese = () => {
  const [largura] = React.useState(new Animated.Value(100));
  const [altura] = React.useState(new Animated.Value(50));

    Animated.loop(
        Animated.timing(largura, { toValue: 160, duration: 2000 }),
        Animated.timing(altura, { toValue: 50, duration: 2000 }),
    ).start();


  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.Image
          source={require("../images/cuide-se2.jpg")}
          style={{ width: largura, height: altura }}
        />
      </Animated.View>
    </View>
  );
};
export default Cuidese;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#F6F2EE",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
  },
});
