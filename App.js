import { useRef, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import ModalResultado from './src/components/modal';

export default function App() {

  const [fontsLoaded] = useFonts({
    'STYLISHBOY': require('./assets/fonts/stylishboy.ttf'),
  });

  const [alcool, setAlcool] = useState(0);
  const [gas, setGas] = useState(0);
  const [calculado, setCalculado] = useState(false);
  const [worth, setWorth] = useState(false);

  function calcular(){
    if(alcool === '' || gas === '' || Number(alcool) === 0 || Number(gas) === 0){
      alert('Insira valores válidos para o cálculo');
      return;
    }
    
    let response = Number(alcool) / Number(gas);

    if(response < 0.7){
      setWorth(true)
    } else {
      setWorth(false)
    }

    setCalculado(true);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 50, borderRadius: 999}}>
            <Image
              style={{width: 150, height: 150, transform: [{translateX: 10}]}}
              source={require('./img/Bomba.png')}/>
          </View>
          <Text style={styles.textoTitulo}>Qual melhor opção?</Text>
        </View>
        <View style={styles.areaInput}>
          <Text style={styles.textoInput}>Álcool (preço por litro): </Text>
          <TextInput
          value={alcool}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={ (valor) => {
              (setAlcool(valor))
            }}
          />
          <Text style={styles.textoInput}>Gasolina (preço por litro): </Text>
          <TextInput
          value={gas}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={ (valor) => {
              (setGas(valor))
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.areaBtn}
          onPress={calcular}
        >
          <Text style={styles.textBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* O modal agora usa o estado 'calculado' e a centralização fica DAELE dentro */}
      <ModalResultado 
        visible={calculado}
        compensaAlcool={worth}
        onFechar={() => {
          setCalculado(false)
          setGas(0)
          setAlcool(0)
        }}
        gasolina={gas}
        alcool={alcool}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 56,
    backgroundColor: '#1f1f1f',
    alignItems: 'center'
  },
  areaTitulo: {
    marginTop: 24,
    gap: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTitulo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'semibold',
    textAlign: 'center',
    fontFamily: 'STYLISHBOY'
  },
  areaInput:{
    flexDirection: 'column',
    width: 350,
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4
  },
  textoInput: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'start',
    fontWeight: 'semibold',
    fontFamily: 'STYLISHBOY'
  },
  areaBtn: {
    backgroundColor: '#ef9f00',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textBotao:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'semibold',
    fontFamily: 'STYLISHBOY',
    marginBottom: 12
  }
});
