import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Google</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Pesquisar" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4285f4',
    marginBottom: 20,
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginLeft: 8,
    fontSize: 16,
  },
});
