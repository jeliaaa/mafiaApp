// import { Link } from 'expo-router';
// import { StyleSheet, ImageBackground, Text, Pressable, Button, View } from 'react-native';

// export default function HomeScreen() {
//   // console.log('aa');

//   return (
//     <ImageBackground style={styles.container} source={require("../../assets/images/home_bg.png")} resizeMode='cover'>
//       <View>
//         <Button title="Go to Players" onPress={() => console.log('Button pressed')} />
//         <Pressable style={styles.button} onPress={() => console.log('Button pressed')}>
//           <Link style={styles.link} href={'/players'}>
//             <Text>დაწყებასა</Text>
//           </Link>
//         </Pressable>
//         <Text>123a</Text>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     zIndex: 10
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   button: {
//     width: 100,
//     height: 50,
//     backgroundColor: 'blue',
//     zIndex: 1000
//   },
//   link: {
//     width: '100%',
//     height: '100%'
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Pressable, ImageBackground, Image } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground style={styles.container} source={require("../../assets/images/home_bg.png")} resizeMode='cover'>
      <View style={styles.containerInner}>
        <Pressable style={styles.button} onPress={() => router.push("/players")}>
          <Image style={styles.bullet} width={22} height={52} resizeMode='cover' source={require("../../assets/icons/bullet.webp")}/>
          <Text style={styles.startText}>
            დაწყებასა
          </Text>
          <Image style={styles.blood} width={36} height={45} resizeMode='cover' source={require("../../assets/icons/blood.webp")}/>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.push("/players")}>
          <Image style={styles.settings} width={45} height={45} resizeMode='cover' source={require("../../assets/icons/settings.webp")}/>
          <Text style={styles.settingText}>
            პარამეტრები
          </Text>
          <Image style={styles.blood} width={36} height={45} resizeMode='cover' source={require("../../assets/icons/blood.webp")}/>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  containerInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    rowGap: 25
  },
  settings: {
    width: 45,
    height: 45,
  },
  bullet: {
    width: 22,
    height: 52,
  },
  blood: {
    width: 36,
    height: 45,
  },
  button: {
    paddingHorizontal: 10,
    gap: 20,
    height: 60,
    backgroundColor: 'black',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  startText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 43,
    textAlignVertical: 'center'
  },
  settingText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 33,
    textAlignVertical: 'center'
  }
});
