import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PolishKing from './PolishKing';
import KingsList from './KingList';

export default function App() {
  kings = [
    {id:1, name:"Bołesław Chrobry",
    reignDate:"992-1025"},
    {id:2, name:"Przemysłał II",
    reignDate:"992-1025"},
    {id:3, name:"Bołesław Chrobry",
    reignDate:"992-1025"},
    {id:4, name:"Bołesław Chrobry",
    reignDate:"992-1025"},
  ]
  return (
        <View style={styles.container}>
         <KingsList kingsList={kings} />
    
        </View>
      );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <PolishKing name="Bołesław Chrobry" />
//       <PolishKing name="Przemysłał II" />

//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
