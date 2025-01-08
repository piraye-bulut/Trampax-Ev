import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { HomeContext } from '../context/HomeContext';
import { Ionicons } from '@expo/vector-icons'; 

const HomeDetailScreen = ({ route }) => {
  const { homes, sendOffer } = useContext(HomeContext);
  const { homeId } = route.params;

  const home = homes.find((h) => h.id === homeId);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={home.image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.homeName}>{home.name}</Text>
        <Text style={styles.homeLocation}>{home.location}</Text>
        <Text style={styles.homeDescription}>{home.description}</Text>
        <View style={styles.statsRow}>
          <Text style={styles.status}>{home.status}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="star" size={16} color="gold" />
            <Text style={styles.stat}>{home.rating}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="home" size={16} color="green" />
            <Text style={styles.stat}>{home.visits}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="bed" size={16} color="blue" />
            <Text style={styles.stat}>{home.rooms}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubble" size={16} color="gray" />
            <Text style={styles.stat}>{home.reviews}</Text>
          </View>
        </View>
        {home.status === 'Mevcut' && (
          <TouchableOpacity style={styles.offerButton} onPress={() => sendOffer(homeId)}>
            <Text style={styles.buttonText}>Takas Teklifi Gönder</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: 450,  // Görsel yüksekliği
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center'
  },
  homeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  homeLocation: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5
  },
  homeDescription: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  status: {
    fontSize: 16,
    color: '#F7941E',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  stat: {
    fontSize: 16,
    color: '#888',
    marginLeft: 4
  },
  offerButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '10%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14  
  },
});

export default HomeDetailScreen;