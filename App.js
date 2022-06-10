
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Cep from './Componentes/Cotacao.js';
import Api from './Componentes/Api.js';

export default function App(){
  const [Cotacao, setCotacao] = useState("");
  const [inputCotacao, setInputCotacao] = useState(0);

  async function buscaCotacao(){
    const response = await Api.get('ws/'+inputCotacao+'/json');
    setCep(response.data);
}
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text style={styles.texto}>Cotação de moedas</Text>
      <TouchableOpacity
      style={styles.botao}
      onPress={buscaCotacao}
      >
      <Text style={styles.txtBotao}>Dolar para real</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>Dados da cotação</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItems: 'center',
  },
  texto:{
    fontSize:20,
  },
  input:{
    width:'80%',
    marginLeft:'5%',
    borderBottomWidth:2,
    marginTop:20,
    fontSize:30,
    
  },
  botao:{
  marginTop:30,
  width:'80%',
  padding:15,
  
  },
  txtBotao:{
    fontSize:30,
    backgroundColor:'black',
    color:'white',
    textAlign: 'center',
    borderRadius: 10
    
  }
});