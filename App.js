import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import OffersScreen from './src/screens/OffersScreen';
import AddHomeScreen from './src/screens/AddHomeScreen';
import { HomeProvider } from './src/context/HomeContext';
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';


const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        title: 'Trampax',
        headerShown: false 
      }}
    />
    <Stack.Screen 
      name="Details" 
      component={HomeDetailScreen}
      options={{ title: 'Detaylar' }}  
    />
    <Stack.Screen name="AddHome" component={AddHomeScreen} 
      options={{ title: 'Ev Ekle' }}/>
  </Stack.Navigator>
);


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <HomeProvider>
        <NavigationContainer>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <Tab.Navigator 
                screenOptions={{
                  tabBarStyle: {
                    backgroundColor: theme === 'dark' ? '#333' : '#fff', 
                  },
                  tabBarLabelStyle: {
                    color: theme === 'dark' ? '#fff' : '#000', 
                    fontWeight: 'bold',
                  }
                }}
              >
                <Tab.Screen 
                  name="Anasayfa" 
                  component={HomeStack} 
                  options={{ tabBarLabel: 'Anasayfa', headerShown: false }} 
                />
                <Tab.Screen 
                  name="Tekliflerim" 
                  component={OffersScreen} 
                  options={{ tabBarLabel: 'Tekliflerim' }} 
                />
              </Tab.Navigator>
            )}
          </ThemeContext.Consumer>
        </NavigationContainer>
      </HomeProvider>
    </ThemeProvider>
  );
};

export default App;