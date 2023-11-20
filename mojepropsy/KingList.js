import {Text,View} from 'react-native' ; 
import { FlatList } from 'react-native-web';


const KingsList = ({kingsList}) =>{
    const {id, name, reignDate} = kingsList[0];
    return(
    <View>
        <Text> LISTA KRÓLOW Z FlatList</Text>
        <FlatList 
            data={kingsList}
            renderItem={({item: king})=>(
                    <View>
                        <Text> {king.id} , imię: {king.name}
                         panowanie: {king.reignDate} </Text>
                    </View>
                )}
        />
    </View>
    )
    
}
export default KingsList;