import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Kontak Kami</Text>
      <Text>Email: 23081010088@student.upnjatim.ac.id</Text>
      <Text>Telepon: +62 815 1526 0360</Text>
      <Button title="Kembali ke Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  title: { fontSize: 22, marginBottom: 10 },
});
