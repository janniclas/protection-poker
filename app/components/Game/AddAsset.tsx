import React from 'react';
import { View, TextInput } from 'react-native';



export default () => {
    const defaultText = 'Enter Asset Name';
    const [value, onChangeText] = React.useState(defaultText);
    return (
        <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            onFocus={() => {if(value == defaultText) {
                onChangeText('');
            }}}
            value={value}
            />
        </View>
    )
}