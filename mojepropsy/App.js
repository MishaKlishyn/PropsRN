import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Switch } from 'react-native';
import {  RadioButton } from 'react-native-paper';

// import PolishKing from './PolishKing';
// import KingsList from './KingList';
// import KingChild from '/components/KingChild'
import MyRadioButton from '/components/MyRadioButton'
import { useState } from 'react';

export default function App() {
  // let kings = [
  //   {id:1, name:"Bołesław Chrobry",
  //   reignDate:"992-1025"},
  //   {id:2, name:"Przemysłał II",
  //   reignDate:"992-1025"},
  //   {id:3, name:"Bołesław Chrobry",
  //   reignDate:"992-1025"},
  //   {id:4, name:"Bołesław Chrobry",
  //   reignDate:"992-1025"},
  // ]
  // const [childData, setChildData] = useState(null);
  // const childDataHandler = (data) => {
  //   setChildData(data);
  // }
  // const[userChoice,setUserChoice] = useState("")
  // const [priority, setPriority] = useState("")

  const [isEnable, setEnable] = useState(false)

  function sendDataHandler(){
           console.log(`wysyłam ${priority}`);
  }
  return (
        <View style={ {
          backgroundColor: isEnable ? "black" : "white",
          flex:1,
          justifyContent: "center"
         } }>
          
          <Switch 
           trackColor={{false: "#767577", true:"#81b0ff"}}
           thumbColor={isEnable ?  "#f5dd4b": "#f4f3f4"}
           onValueChange={()=>setEnable(previous => ! previous)}
           value={isEnable}
          />

        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <PolishKing name="Bołesław Chrobry" />
//       <PolishKing name="Przemysłał II" />

//     </View>
//   );
// }

{/* <Text style={{margin:30}}>
            Data received from a child component:
          </Text>
          {
            childData && <Text style={{color:"red"}}> {childData}</Text>
          }
          <KingChild onDataReceiver={childDataHandler}  abc="ewew"/> */}

//           <MyRadioButton label="nie podoba sie"
//           value="unlike"
//           checked={priority}
//           onValueChange={setPriority}
// />
// <MyRadioButton label="podoba mi sie"
//           value="like"
//           checked={priority}
//           onValueChange={setPriority}
// />
// <Button title="Wysli dane" onPress={sendDataHandler} />  
