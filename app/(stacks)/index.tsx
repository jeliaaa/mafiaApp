import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground style={styles.container} source={require("../../assets/images/home_bg.png")} resizeMode='cover'>
        <Text>123</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
