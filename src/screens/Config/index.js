import React from 'react';
import BaseContainer from '../../components/BaseContainer';
import Header from '../../components/Header';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function Config({ navigation }) {
  return (
    <BaseContainer>
      <Header navigation={navigation} title={'CONFIGURATIONS'}/>

      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Name:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Name"
        />
        <Text style={styles.inputText}>IP Address:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your IP address"
        />
        <Text style={styles.inputText}>Port:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Port"
        />
      </View>
      
    
    </BaseContainer>
  );
}


const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#D7E1F3',
    borderWidth: 1,
    paddingHorizontal: 10,
},
  inputArea: {
    marginTop: 80,
  },
  inputText: {
    marginTop: 25,
    marginBottom: 10,
    color: "#91A1BD",
  }
});