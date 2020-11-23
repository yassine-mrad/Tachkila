import React,{useContext} from 'react';
import {Button} from 'react-native-elements';
import Spacer from './../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext' ;
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <View>
      <Text style={{fontSize:30}}>AccountScreen</Text>
      <Spacer />
      <Button title="Deconnexion"  onPress={signout}/>
     </View>
  );
}
const styles = StyleSheet.create({});
export default AccountScreen;