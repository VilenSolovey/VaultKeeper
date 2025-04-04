import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackActions } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './Screens/HomeScreen';
import AddPasswordScreen from './Screens/AddPasswordScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SearchPasswordScreen from './Screens/SearchPasswordScreen';
import EditPasswordScreen from './Screens/EditPasswordScreen';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import { StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import { PasswordProvider } from './Contexts/PasswordContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import { FontSizeProvider } from './Contexts/FontSizeContext';
import { ThemeProvider, useTheme } from './Contexts/DarkMode';
import { LanguageProvider } from './Contexts/LanguageContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#0C727D',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditPasswordScreen" component={EditPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SearchPasswordScreen" component={SearchPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  const { isDarkTheme } = useTheme();
  const tabBarStyle = {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 80,
    ...styles.shadow,
    backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Icon name="home" color={focused ? '#0C727D' : '#748c94'} size={30} />
          </View>
        ),
        tabBarLabel: ''
      }} />
      <Tab.Screen name="Plus" component={AddPasswordScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Icon name="plus" color={'#F5F5DC'} size={30} />
          </View>
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} />
        ),
        tabBarLabel: ''
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Icon name="gear" color={focused ? '#0C727D' : '#748c94'} size={30} />
          </View>
        ),
        tabBarLabel: ''
      }} />
    </Tab.Navigator>
  );
};

const App = () => {
  const scheme = useColorScheme();

  return (
    <PasswordProvider>
      <FontSizeProvider>
        <ThemeProvider>
          <LanguageProvider>
            <I18nextProvider i18n={i18n}>
              <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack.Navigator initialRouteName="Splash">
                  <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Main"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </I18nextProvider>
          </LanguageProvider>
        </ThemeProvider>
      </FontSizeProvider>
    </PasswordProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default App;
