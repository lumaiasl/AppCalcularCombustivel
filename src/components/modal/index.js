import React from "react";
import { View, Image, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";


export default function ModalResultado({ visible, onFechar, compensaAlcool, alcool, gasolina }) {
    return(
       <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onFechar}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <View style={{height: 125, width: 125, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 999}}>
                <Image
                    source={require('../../../img/Boca-Bomba.png')}
                    style={{height: 100, width: 100}}
                />
            </View>
              <View style={{alignItems: 'center'}}>
                  <Text style={styles.titulo}>
                    {compensaAlcool ? 'Compensa usar Álcool!' : 'Compensa usar Gasolina!'}
                  </Text>
                  <Text style={{color: '#fff', fontSize: 24, fontFamily: 'STYLISHBOY', fontWeight: 'bold'}}>Com os Preços:</Text>
                  <Text style={{fontFamily: 'STYLISHBOY', color: '#fff'}}>Álcool: {alcool}</Text>
                  <Text style={{fontFamily: 'STYLISHBOY', color: '#fff'}}>Gasolina: {gasolina}</Text>
              </View>
          </View>

          <TouchableOpacity style={styles.botao} onPress={onFechar}>
            <Text style={styles.textoBotao}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 24,
    gap: 32,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#53de43',
    fontFamily: 'STYLISHBOY',
  },
  botao: {
    borderColor: '#f25500',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#f25500',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'STYLISHBOY',
  },
});