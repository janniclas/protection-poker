import React from 'react';

import {View, Text, Button, Linking, Alert} from 'react-native';

const URL = 'https://opensource.com/article/19/3/protection-poker-agile-security-game';

const handlePress = async () => {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(URL);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(URL);
  } else {
    Alert.alert(`Don't know how to open this URL: ${URL}`);
  }
};

export default () => {
  return (
    <View>
      <Text>For now we would like to ask you to refere to the Rule provided on the following Website:</Text>
      <Button title={'Go to Rules'} onPress={handlePress} />
    </View>
  );
};
