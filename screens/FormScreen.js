import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function FormScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Formulir</Text>
      <TextInput placeholder="Nama Anda" style={styles.input} />
      <TextInput placeholder="Email Anda" style={styles.input} />
      <Button title="Kirim" onPress={() => alert('Formulir terkirim!')} />
      <Button title="Kembali ke Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  title: { fontSize: 22, marginBottom: 10 },
  input: {
    width: '80%', padding: 10, borderWidth: 1,
    borderColor: '#ccc', borderRadius: 8
  },
});
