import React, { useState, useContext } from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View, 
  TouchableOpacity
} from 'react-native';
import Ionicons from  'react-native-vector-icons/Ionicons';
import {UserContext} from '../Context/UserContext'

export default function PerfilScreen({navigation, logado}) {
  const [ usuario, setUsuario ] = useContext(UserContext) 
  const pressionaSair = () => {
    setUsuario({logado: false, nome: ''})

  }
  
  return(
    <View style={{flex: 1}}>
     <View style={{ flex: 0.05, backgroundColor: '#0E1F0B', flexDirection: 'row', padding: 8}}>
       <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Ionicons
          name="arrow-back"
          size={30}
          color="#C8F4C0"
          />
        </TouchableOpacity>
        <Text style={{fontSize: 22, color: '#C8F4C0'}}> USUÁRIO</Text>
      </View>
    <View style={{flex: 0.9,  alignItems: "center", padding: 10}}>
       <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 10, borderRadius: 10}}  >
        <Button color='#C8F4C0' title = "MINHA CONTA" onPress={() => {}} />
      </View>
      <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 5, borderRadius: 10}}>
        <Button  color='#C8F4C0' title = "HISTÓRICO DE COMPRA" onPress={() => {}} />
      </View>
       <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 5, borderRadius: 10}}>
        <Button  color='#C8F4C0' title = "CARTÃO CADASTRADO" onPress={() => {}} />
      </View>
      </View>
      <View style={{backgroundColor: "red"}}>
      <Button  color='white' title = "SAIR" onPress={pressionaSair} />
      </View>
    
    </View>
  );

}




