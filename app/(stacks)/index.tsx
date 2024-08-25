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

import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground style={styles.container} source={require("../../assets/images/home_bg.png")} resizeMode='cover'>
      <View style={styles.containerInner}>
        <Pressable style={styles.button} onPress={() => console.log('Button pressed')}>
          <Link style={styles.link} href={'/players'}>
            დაწყებასა
          </Link>
        </Pressable>
        <Pressable style={styles.button} onPress={() => console.log('Button pressed')}>
          <Link style={styles.link} href={'/players'}>
            პარამეტრები
          </Link>
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
    paddingHorizontal: 10,
    rowGap: 10
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    color: 'red',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  link: {
    width: '100%',
    height: '100%',
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text: {
  }
});
