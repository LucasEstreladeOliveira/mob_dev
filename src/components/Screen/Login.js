import React from 'react'
import { View, Image, Button, StyleSheet } from 'react-native'
import { logo } from '../../assets';

export default ({navigation}) => {
  const styles = StyleSheet.create({
    logo: {
      width: '90%',
      height: 50,
      marginBottom: 50
    },
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#292D3E' }}>
      <Image style={styles.logo} source={logo} />
      <Button
        title="Entre"
        color='#717CB470'
        onPress={() => navigation.navigate('MyTabs')}
      />
    </View>
  );
}