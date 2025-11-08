import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Halaman Utama</Text>

      <Button title="Formulir" onPress={() => navigation.navigate('Form')} />
      <Button title="Kontak" onPress={() => navigation.navigate('Contact')} />
      <Button title="Tentang Aplikasi" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 15 },
  title: { fontSize: 24, marginBottom: 30, fontWeight: 'bold' },
});
