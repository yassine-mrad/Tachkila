import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TeamListeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize:30}}>TeamListeScreen</Text>
      <Button title="Go To Detail" onPress={() => navigation.navigate('TeamDetail')} />
     </View>
  );
}

const styles = StyleSheet.create({});
export default TeamListeScreen;