import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tentang Aplikasi</Text>
      <Text style={styles.desc}>
        Aplikasi ini dibuat sebagai contoh proyek React Native dengan navigasi.
      </Text>
      <Button title="Kembali ke Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  desc: { textAlign: 'center', marginBottom: 20 },
});
