import React, { useState } from 'react';
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

export default function ComprarScreen({navigation}) {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  
  return(
    <View style={{flex: 1}}>
     <View style={{flex: 0.05, backgroundColor: '#0E1F0B', flexDirection: 'row', padding: 8}}>
      <TouchableOpacity onPress = {() => navigation.goBack()}>
          <Ionicons
          name="arrow-back"
          size={30}
          color="#C8F4C0"
          />
        </TouchableOpacity>
      <Text style={{color: "#C8F4C0", fontSize: 22}}>COMPRAR</Text>
    </View>
    <View style={{flex: 0.9, justifyContent: "center", alignItems: "center"}}>
     <Image style={{width:200, height: 300}} source={require('../assets/livro1.png')} />
     <Text style={{textAlign: "center"}}>A CORTE DE ESPINHOS E ROSAS{"\n"}PREÇO: R$ 37,90{"\n"}DESCRIÇÃO: O livro Corte de Espinhos e Rosas conta a história de Feyre, uma humana que vive na extrema pobreza e tem que se virar sozinha para sustentar suas duas irmãs e seu pai. O mundo em que ela vive é dividido entre humanos e seres mágicos chamados feéricos, considerados assassinos cruéis da raça humana.</Text>
      <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 10, borderRadius: 10}}  >
         <Button color='#C8F4C0' title = "COMPRAR" onPress={() => alert('Parabéns!Você comprou um novo Livro') } />
      </View>
      <View style={{backgroundColor: "#0E1F0B", width: 300, marginTop: 5, borderRadius: 10}}>
        <Button  color='#C8F4C0' title = "CARRINHO" onPress={() => alert('Livro Adicionado no Carrinho!')} />
      </View>
    </View>
    </View>
  );
}