import React from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

export default ({defaultText, inputHandler}: {defaultText: string; inputHandler: (name: string) => void}) => {
  const isDefaultText = (text: string) => text === defaultText;
  const [value, onChangeText] = React.useState(defaultText);

  const finishAdd = () => {
    if (!isDefaultText(value)) {
      inputHandler(value);
      onChangeText('');
    } else {
      Alert.alert('Please provide a meaningfull input.');
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
      <Button title={'Create'} onPress={finishAdd} />
    </View>
  );
};
