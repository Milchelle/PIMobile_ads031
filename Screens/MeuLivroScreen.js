import React from 'react';
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



export default function MeuLivro({navigation}){
  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 0.15, backgroundColor: '#0E1F0B', flexDirection: 'row', padding: 8}}>
        <Text style={{fontSize: 25, color: '#C8F4C0'}}> MEUS LIVROS </Text>
      </View>
      
      <View  style={{ flex: 2, backgroundColor: 'white'}}>
      <ScrollView>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro1.png')} />
      <Text style={{textAlign: 'center'}}>CORTE DE ESPINHOS E ROSAS </Text>
      <Text style={{color: 'green'}}> Parabéns! Seu Livro já chegou.</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro2.png')} />
      <Text style={{textAlign: 'center'}}>A CORTE DE NÉVOA E FÚRIA</Text>
      <Text style={{color: 'orange'}}> Seu livro está a caminho! </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro5.png')} />
      <Text style={{textAlign: 'center'}}>A CORTE DE NÉVOA E FÚRIA</Text>
      <Text style={{color: 'red'}}> Seu Pedido foi cancelado! </Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
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
