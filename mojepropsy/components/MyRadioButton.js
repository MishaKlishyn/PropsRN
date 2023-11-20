import { RadioButton } from 'react-native-paper';
import { Text, View  } from 'react-native';

const MyRadioButton = ({label, value, checked, onValueChange}) =>{

    return(
        <View style={{ flexDirection:"row", alignItems:"center"}}>
            <RadioButton
                value={value}
                status={checked === value ? "checked" : "unchecked"}
                onPress={() => onValueChange(value)}
            />
            <Text>{label}</Text>
        </View>
    )

}

export default MyRadioButton;