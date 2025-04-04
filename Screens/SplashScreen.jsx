import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Image, Animated, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const SplashScreen= () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(-300)).current; 

  useEffect(() => {
    
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000, 
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 2000); 
    return () => clearTimeout(timer);
  }, [navigation, slideAnim]);

  return (
    <ImageBackground source={require('../Images/background.png')} style={styles.container}>
      <Image source={require('../Images/appImage.jpg')} style={styles.logo} />
      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        <Text style={styles.text}>VaultKeeper</Text>
      </Animated.View>
      <Text style={styles.tinytext}>Паролі завжди під рукою</Text>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: -10,
  },
  text: {
    fontSize: 30,
    color: '#F5F5DC',
    fontWeight: '900',
  },
  tinytext: {
    fontSize: 16,
    color: '#F5F5DC',
    fontWeight: '900',
    marginTop: 340,
  }
});

export default SplashScreen;
