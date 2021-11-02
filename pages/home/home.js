import React from 'react';

import {Text, View, Button} from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'powderblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Insert Map</Text>
      </View>
    </View>
  );
}
