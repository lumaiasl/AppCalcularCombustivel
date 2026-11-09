import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'STYLISHBOY': require('./assets/fonts/stylishboy.ttf'),
  });

  const [alcool, setAlccol] = useState(0);
  const [gas, setGas] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
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
          style={styles.input}
          keyboardType='numeric'
          onChangeText={ (valor) => {
            (setAlccol(valor))
          }}
        />
        <Text style={styles.textoInput}>Gasolina (preço por litro): </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={ (valor) => {
            (setGas(valor))
          }}
        />
      </View>
      <TouchableOpacity style={styles.areaBtn}>
        <Text style={styles.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    gap: 56,
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
    fontFamily: 'STYLISHBOY'
  },
  areaInput:{
    flexDirection: 'column',
    width: '90%',
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
    fontSize: 16,
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
    fontSize: 24,
    fontWeight: 'semibold',
    fontFamily: 'STYLISHBOY',
    marginBottom: 10
  }
});
