import {Text,View,Button} from 'react-native' ;

const KingChild = ({ onDataReceiver}) =>{
   
    function sendChildIdToApp(){
        const data ="dane do królewszkiego dziecka";
        onDataReceiver(data) ;
    }
        return(
            <View>
                <Text style={{margin:10}}>Test z dziecka</Text>
                <Button title='wyślij z dziecka do rodzica' onPress={sendChildIdToApp} />
            </View>
        )
}
export default KingChild;