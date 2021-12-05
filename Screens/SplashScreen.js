import React, { useState, Component } from 'react';
import {
 Image,
 StyleSheet,
 Text,
 View
} from 'react-native';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';

export default function SplashScreen() {
  return(
    <View style={styles.conteudo}>
      <View>
        <FontAwesome5
          name="book-open"
          size={120}
          color="#C8F4C0"
          />
        
      </View>
      <View>
      <Text style={styles.texto}>MY BOOKSTORE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E1F0B'
    
  },
  texto:{
    fontStyle: 'sensation',
    color: "white",
    padding: 12,
    fontSize: 22,
  }
});