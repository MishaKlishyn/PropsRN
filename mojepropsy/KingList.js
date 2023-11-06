import {Text,View} from 'react-native' ; 


const KingsList = ({KingsList}) =>{
    const {id, name, reignDate} = KingsList[0];
    return(
        <View>
            <Text> Lista Królów</Text>
        </View>
    )
    
}
export default KingsList;