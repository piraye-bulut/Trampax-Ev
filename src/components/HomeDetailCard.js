// src/components/HomeDetailCard.js

import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 3; 

const HomeDetailCard = ({ home }) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: home.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.homeName}>{home.name}</Text>
        <Text style={styles.homeLocation}>{home.location}</Text>
        <Text style={styles.homeDescription}>{home.description}</Text>
        <View style={styles.statsRow}>
          <Text style={styles.status}>{home.status}</Text>
          <Text style={styles.stat}>⭐ {home.rating}</Text>
          <Text style={styles.stat}>🏠 {home.visits}</Text>
          <Text style={styles.stat}>🛌 {home.rooms}</Text>
          <Text style={styles.stat}>💬 {home.reviews}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignSelf: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  infoContainer: {
    padding: 10
  },
  homeName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  homeLocation: {
    fontSize: 14,
    color: '#888',
    marginTop: 2
  },
  homeDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 2
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  status: {
    fontSize: 14,
    color: '#F7941E'
  },
  stat: {
    fontSize: 14,
    color: '#888'
  }
});

export default HomeDetailCard;