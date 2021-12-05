import React, {useState} from 'react';
import {
  Image,
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import FontAwesome from  'react-native-vector-icons/FontAwesome';
import Ionicons from  'react-native-vector-icons/Ionicons';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';



export default function PesquisarScreen({navigation}){
  const [ texto, setTexto] = useState('');

  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 0.15, backgroundColor: '#0E1F0B', flexDirection: 'row', padding: 8}}>
        <Text style={{fontSize: 25,  color: '#C8F4C0'}}> PESQUISAR </Text>
      </View>
      <TextInput
        style={{backgroundColor:"#E5E5E5", height: 40}}
        autoCapitalize = { true }
        placeholder = "PESQUISAR"
        value = {texto}
        onChangeText = {(text) => setTexto(text)}
      />
      
      <View  style={{ flex: 2, backgroundColor: 'white', alignItems: "center", justifyContent: "center"}}>
      <FontAwesome5
          name="book-open"
          size={120}
          color="#E5E5E5"
          />
        

      </View>


      <View style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#C8F4C0', padding: 8}}>
        
      <TouchableOpacity onPress={() => navigation.navigate('home')} >
          <FontAwesome name="home" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('pesquisar')}>
          <FontAwesome name="search" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('carrinho')}>
          <FontAwesome name="shopping-cart" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('meuslivros')}>
          <Ionicons name="book" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
