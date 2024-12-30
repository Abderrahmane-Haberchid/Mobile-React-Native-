import { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput, Button, ToastAndroid } from 'react-native';

export default function HomeScreen() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState(0);
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [cemail, setCEmail] = useState('');

  const handleafficher = () => {
    //ToastAndroid.show(nom, ToastAndroid.LONG);

    if(isFinite(age)){
      if (email === cemail) {
        ToastAndroid.show("All information typed: "+nom+"; "+prenom+"; "+age+"; "+adresse+"; "+email, ToastAndroid.LONG);
      }
      else
        ToastAndroid.show("Emails are not identical !", ToastAndroid.LONG);
    }
    else
      ToastAndroid.show("Age is not a number !", ToastAndroid.LONG);
  }

  return (
   <SafeAreaView style={styles.safeArea}>

      <View>
        <Text style={styles.title}>
          Register
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Nom: 
        </Text>
        <TextInput 
          onChangeText={(e) => setNom(e)} 
          placeholder='Nom...' 
          style={styles.textInput} />
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Prénom: 
        </Text>
        <TextInput 
          onChangeText={(e) => setPrenom(e)} 
          placeholder='Prénom...' 
          style={styles.textInput} />
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Age: 
        </Text>
        <TextInput 
        onChangeText={(e) => setAge(Number(e))} 
        placeholder='Age...' 
        style={styles.textInput} />
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Adresse: 
        </Text>
        <TextInput 
          onChangeText={(e) => setAdresse(e)} 
          placeholder='Adresse...' 
          style={styles.textInput} />
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Email: 
        </Text>
        <TextInput 
          onChangeText={(e) => setEmail(e)} 
          placeholder='Adresse email...' 
          style={styles.textInput} />
      </View>

      <View style={styles.titleContainer}>
        <Text>
          Confirmer Email: 
        </Text>
        <TextInput 
          onChangeText={(e) => setCEmail(e)} 
          placeholder='Confirmer email...' 
          style={styles.textInput} />
      </View>

      <View style={{marginTop: 20, width: '90%'}}>
      <Button title="Afficher" onPress={handleafficher} />
      </View>
      
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  safeArea: {
    flexDirection: 'column',
    marginVertical: 60,
    padding: 20
  },
  titleContainer: {
    paddingLeft: 10,
    fontSize: 35,
    marginTop: 20
  },
  textInput: {
    marginTop: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray'
  },
  stepContainer: {
     
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
function useForm(p0: { defaultValues: { name: string; email: string; }; }): [any, any, any] {
  throw new Error('Function not implemented.');
}

