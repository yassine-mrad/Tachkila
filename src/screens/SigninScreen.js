import React ,{ useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from './../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext' ;



 

const SigninScreen = ({navigation}) => {
  const { state, signin,clearErrorMessage } = useContext(AuthContext);

  const [email,setEmail] = useState('');
  const [motdepasse,setMotdepasse] = useState('');

 


  return (<SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <NavigationEvents
      onWillBlur={clearErrorMessage}
    />
     <Spacer />
        <Text h3 >Connexion Tachkila </Text>
        
        <Input label="Email" value={email} onChangeText={setEmail}autoCapitalize="none" autoCorrect={false}/>
        
        <Input label="Mot De Passe"  secureTextEntry value={motdepasse} onChangeText={setMotdepasse}autoCapitalize="none" autoCorrect={false}/>


      {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) : null } 
        
        <Button  title="Connexion" onPress={ () => signin({email,motdepasse}) }  />
        
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.link} >
           Creer un compte 
          </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

SigninScreen.navigationOptions = () =>{
  return {
    headerShown:false
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link:{
    alignSelf:"center",
    fontSize: 16,
    marginBottom:15,
    marginTop:15,
    color:'blue'
  },
  errorMessage:{
    fontSize: 16,
    color: 'red' ,
    marginLeft: 15,
    marginBottom: 15,
  },
  scrollView: {
    flex: 1,
    
    marginHorizontal: 20,
  },
});
export default SigninScreen;