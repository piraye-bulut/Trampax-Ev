import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import HomeCard from '../components/HomeCard';
import { HomeContext } from '../context/HomeContext';
import { ThemeContext } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = ({ navigation }) => {
  const { homes } = useContext(HomeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const renderFooter = () => (
    <TouchableOpacity 
      style={styles.addButton}
      onPress={() => navigation.navigate('AddHome')}
    >
      <Text style={styles.buttonText}>Yeni Ev Ekle</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5' }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>Anasayfa</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Ionicons 
            name={theme === 'dark' ? 'sunny' : 'moon'} 
            size={24} 
            color={theme === 'dark' ? '#fff' : '#000'} 
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={homes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} 
        renderItem={({ item }) => (
          <HomeCard
            home={item}
            onPress={() => navigation.navigate('Details', { homeId: item.id })}
          />
        )}
        columnWrapperStyle={styles.columnWrapper} 
        contentContainerStyle={styles.contentContainer} 
        ListFooterComponent={renderFooter} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  themeButton: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between'
  },
  contentContainer: {
    paddingBottom: 100, 
  },
  addButton: {
    backgroundColor: '#1E90FF',
    width: '10%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
});

export default HomeScreen;