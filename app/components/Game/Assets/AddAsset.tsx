import React from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

export default ({addAssetHandler}: {addAssetHandler: (name: string) => void}) => {
  const defaultText = 'Enter Asset Name';
  const isDefaultText = (text: string) => text === defaultText;
  const [value, onChangeText] = React.useState(defaultText);
  const finishAdd = () => {
    if (!isDefaultText(value)) {
      addAssetHandler(value);
      onChangeText('');
    } else {
      Alert.alert('Please provide a meaningfull asset name');
    }
  };
  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        onFocus={() => {
          if (isDefaultText(value)) {
            onChangeText('');
          }
        }}
        onSubmitEditing={finishAdd}
        value={value}
      />
      <Button title={'Add Asset'} onPress={finishAdd} />
    </View>
  );
};
