import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#09090A",
  },
});
