import React, { useState, useEffect } from 'react';
import {
  Image,
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.15,
          backgroundColor: '#0E1F0B',
          flexDirection: 'row',
          padding: 8,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('perfil')}>
          <FontAwesome name="user-circle-o" size={40} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#C8F4C0',
            padding: 8,
          }}> MY BOOKSTORE </Text>
      </View>

      <View style={{ flex: 2, backgroundColor: 'white', padding: 10 }}>
        <ScrollView>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('comprar')}>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro1.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 37,90</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('comprar2')}>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro2.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 59,80 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro3.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 40,00 </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro4.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 25,00 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro5.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 69,90 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro6.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 39,00 </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro7.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 45,00 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro8.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 39,90 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro9.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 39,90 </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro10.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 30,90 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro11.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 26,30 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro13.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 29,90 </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro14.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 32,90 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro15.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 32,90 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 70, height: 110 }}
                  source={require('../assets/livro17.png')}
                />
                <Text style={{ textAlign: 'center' }}>R$ 32,90 </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flex: 0.15,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#C8F4C0',
          padding: 8,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
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
