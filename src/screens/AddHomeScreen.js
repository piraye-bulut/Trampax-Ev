import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HomeContext } from '../context/HomeContext';
import { launchImageLibrary } from 'react-native-image-picker';

const AddHomeScreen = ({ navigation }) => {
  const { addHome } = useContext(HomeContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleAddHome = () => {
    const newHome = {
      name,
      location,
      description,
      status: 'Mevcut',
      image: image ? { uri: image.uri } : null,
      rating: 0,
      visits: 0,
      rooms: 0,
      reviews: 0,
    };
    addHome(newHome);
    navigation.navigate('Home'); 
  };

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImage(response.assets[0]); 
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Ev Adı</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Lokasyon</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <Text style={styles.label}>Açıklama</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Görsel</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        <Text style={styles.imageText}>Görsel Seç</Text>
      </TouchableOpacity>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.imagePreview} resizeMode="cover" />
        </View>
      )}
      <TouchableOpacity style={styles.addButton} onPress={handleAddHome}>
        <Text style={styles.buttonText}>Ev Ekle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
  },
  imagePicker: {
    backgroundColor: '#1E90FF',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '10%',  
    alignSelf: 'left',
  },
  imageText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    width: '100%',
    height: 180,  
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 10,
    alignSelf: 'center',
    
  },
  addButton: {
    backgroundColor: '#1E90FF',
    padding: 5, 
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'left',
    marginTop: 20,
    width: '10%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddHomeScreen;