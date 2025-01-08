import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { HomeContext } from '../context/HomeContext';

const OffersScreen = () => {
  const { offers, homes } = useContext(HomeContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const home = homes.find((h) => h.id === item.homeId);
          return (
            <View style={styles.offerItem}>
              <Text>{home.name}</Text>
              <Text>{item.status}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  offerItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  }
});

export default OffersScreen;