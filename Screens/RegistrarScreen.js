import React, { useState, useContext } from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {UserContext} from '../Context/UserContext'

export default function RegistrarScreen({ navigation, logado }) {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmar, setConfirmar ] = useState('');
  const [ usuario, setUsuario ] = useContext(UserContext) 

  const pressionaSalvar =() => {
     setUsuario({logado: true, nome:'Michelle'});
  };
  
  const pressionaCancelar = () => {
    navigation.goBack();

  };

  
  return(
    <View style={{flex: 1}}>
     <View style={{flex: 0.1, backgroundColor:"#0E1F0B" ,justifyContent: "center"}}>
      <Text style={{color: "#C8F4C0", fontSize: 22, padding: 8}}>CADASTRAR</Text>
    </View>
    <View style={{flex: 0.9, justifyContent: "center", alignItems: "center"}}>
      <TextInput
        style={{backgroundColor:"#C8F4C0", height: 40, width: 300}}
        autoCapitalize = { true }
        placeholder = "Nome"
        value = {nome}
        onChangeText = {(text) => setNome(text)}
      />
      <TextInput
        style={{backgroundColor:"#C8F4C0", height: 40, width: 300, marginTop: 5}}
        autoCapitalize = { false }
        keyboardType = "email-address"
        placeholder = "E-mail"
        value = {email}
        onChangeText = {(text) => setEmail(text)}
      />
      <TextInput
        style={{backgroundColor:"#C8F4C0", height: 40, width: 300, marginTop: 5}}
        autoCapitalize = { false }
        secureTextEntry = { true }
        placeholder = "Senha"
        value = {senha}
        onChangeText = {(text) => setSenha(text)}
      />
       <TextInput
        style={{backgroundColor:"#C8F4C0", height: 40, width: 300,marginTop: 5}}
        autoCapitalize = { false }
        secureTextEntry = { true }
        placeholder = "Confirmar Senha"
        value = {confirmar}
        onChangeText = {(text) => setConfirmar(text)}
      />
      <View style={{backgroundColor: "#0E1F0b", width: 300, marginTop: 10, borderRadius: 10}}  >
        <Button color='#C8F4C0' title = "SALVAR" onPress={pressionaSalvar}  />
      </View>
      <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 5, borderRadius: 10}}>
        <Button  color='#C8F4C0' title = "CANCELAR"onPress={pressionaCancelar}  />
      </View>
      </View>
    </View>
  );

}