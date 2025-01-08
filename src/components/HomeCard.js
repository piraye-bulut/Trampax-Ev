import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeCard = ({ home, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={home.image} style={styles.image} resizeMode="cover" />
      </View>
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
      </View>
    </TouchableOpacity>
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
    width: '30%'
  },
  imageContainer: {
    width: '100%',
    height: 180,  // Yüksekliği sabitle
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10
  },
  homeName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  homeLocation: {
    fontSize: 12,
    color: '#888',
    marginTop: 2
  },
  homeDescription: {
    fontSize: 12,
    color: '#888',
    marginTop: 2
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    color: '#F7941E'
  },
  stat: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default HomeCard;