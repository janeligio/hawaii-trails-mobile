import React from 'react';

import {Text, View, Button} from 'react-native';

export default function Login({navigation}) {
  return (
    <View>
      <Text style={{flex: 1}}>Login</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
