import React from 'react'
import { Text, View, Button } from 'react-native'

export default ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#292D3E' }}>
          <Button
            title="Sair"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      );
}