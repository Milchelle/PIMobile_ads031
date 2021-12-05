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



export default function CarrinhoScreen({navigation}){
  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 0.15, backgroundColor: '#0E1F0B', flexDirection: 'row', padding: 8}}>
        <Text style={{fontSize: 25, color: '#C8F4C0'}}> CARRINHO </Text>
      </View>
      
      <View  style={{ flex: 2, backgroundColor: 'white'}}>
      <ScrollView>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro1.png')} />
      <Text style={{textAlign: 'center'}}>CORTE DE ESPINHOS E ROSAS {"\n"} R$ 39,90</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro2.png')} />
      <Text style={{textAlign: 'center'}}>A CORTE DE NÉVOA E FÚRIA {"\n"} R$ 59,80</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{padding: 10 , alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:70, height: 110}} source={require('../assets/livro5.png')} />
      <Text style={{textAlign: 'center'}}>A CORTE DE NÉVOA E FÚRIA {"\n"} R$ 70,00</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
      <Text style={{textAlign: 'center'}}> TOTAL: R$ 169,70</Text>
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
