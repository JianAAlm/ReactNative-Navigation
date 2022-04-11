import React from 'react';
import {View,Text} from "react-native";


export default function Contacts({navigation}) {
  return (
    <View style={{marginTop:60}}>
        <View >
          <Text>Nome: Jeannie</Text> 
          <Text>Telefone:(00)00000-0000</Text> 
          <Text
          onPress={()=>navigation.navigate('Information',
          {
            nome:'Jeannie',
            telefone:'(00)00000-0000',
            endereco:'Rua 25',
            num:'50 ',
            profissao:'Desenvolvedora', 
            email:'jeannie@dev.com', 
          })}
          >Information...</Text> 
        </View>
        <View style={{marginTop:30}}>
          <Text>Nome: John doe</Text> 
          <Text>Telefone:(00)00000-0000</Text> 
          <Text
          onPress={()=>navigation.navigate('Information',
          {
            nome:'John doe',
            telefone:'(00)00000-0000',
            endereco:'Rua 20',
            num:'150 ',
            profissao:'Investigador', 
            email:'john@investigador.com', 
          })}
          >Information...</Text> 
        </View>
        <View style={{marginTop:30}}>
          <Text>Nome: Nick Burkhardt</Text> 
          <Text>Telefone:(000)000-0000</Text> 
          <Text
          onPress={()=>navigation.navigate('Information',
          {
            nome:'Nick Burkhardt',
            telefone:'(000)000-0000',
            endereco:'Portland',
            num:'150 ',
            profissao:'Police Detective/ Grimm', 
            email:'NickB@grimm.com', 
          })}
          >Information...</Text> 
        </View>
        <View style={{marginTop:30}}>
          <Text>Nome: Jane doe</Text> 
          <Text>Telefone:(00)00000-0000</Text> 
          <Text
          onPress={()=>navigation.navigate('Information')}
          >Information...</Text> 
        </View>
        
    </View>
  );
}
