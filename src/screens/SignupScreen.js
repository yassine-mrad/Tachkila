import React ,{ useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import DatePicker from 'react-native-datepicker'
import Spacer from './../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext' ;





const SignupScreen = ({navigation}) => {
  const { state, signup ,clearErrorMessage  } = useContext(AuthContext);
  const [nom,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [email,setEmail] = useState('');
  const [motdepasse,setMotdepasse] = useState('');
  const [datenaissance,setDatenaissance] = useState('2000-01-01');
  const [localisation,setLocalisation] = useState('');
  const [telephone,setTelephone] = useState('');
  const [profession,setProfession] = useState('');
  const [niveau,setNiveau] = useState('');



  return (<SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <NavigationEvents
      onWillBlur={clearErrorMessage}
    />
     <Spacer />
        <Text h3 >Inscription Tachkila </Text>
        <Input label="Nom" value={nom} onChangeText={ setNom} autoCapitalize="none" autoCorrect={false} />
        
        <Input label="Prenom"  value={prenom} onChangeText={setPrenom} autoCapitalize="none" autoCorrect={false}/>
        
        <Input label="Email" value={email} onChangeText={setEmail}autoCapitalize="none" autoCorrect={false}/>
        
        <Input label="Mot De Passe"  secureTextEntry value={motdepasse} onChangeText={setMotdepasse}autoCapitalize="none" autoCorrect={false}/>

        <Input label="Localisation" value={localisation} onChangeText={setLocalisation}autoCapitalize="none" autoCorrect={false}/>
        
        <Input label="Telephone"  value={telephone} onChangeText={setTelephone} autoCapitalize="none" autoCorrect={false}/>
        
        <Input label="Profession"value={profession} onChangeText={setProfession} autoCapitalize="none" autoCorrect={false} />

        <Input label="niveau" value={niveau} onChangeText={setNiveau}  autoCapitalize="none" autoCorrect={false}/>
        <Spacer>
        <DatePicker
        style={{width: 200}}
        date={datenaissance}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1950-01-01"
        maxDate="2007-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 50
          },
          dateInput: {
            marginLeft: 96
          }
        }}
        onDateChange={(date) => setDatenaissance(date)}
      />
        </Spacer>
      {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) : null } 
        
        <Button  title="Inscription" onPress={ () => signup({nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau}) }  />
        
        <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
          <Text style={styles.link} >
           Vous avez déjà un compte ?
          </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

SignupScreen.navigationOptions = () =>{
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
export default SignupScreen;