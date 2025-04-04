import React, { useState, useContext } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { PasswordContext } from '../Contexts/PasswordContext';
import { lightStyles, darkStyles } from '../Styles/SearchPasswordStyles';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../Contexts/DarkMode';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchPasswordScreen = () => {
  const [query, setQuery] = useState('');
  const { passwords, passwordVisible } = useContext(PasswordContext);
  const navigation = useNavigation();
  const filteredPasswords = passwords.filter(password =>
    password.name.toLowerCase().includes(query.toLowerCase())
  );
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();
  const styles = isDarkTheme ? darkStyles : lightStyles;

  const handlePress = (password) => {
    navigation.navigate('EditPasswordScreen', { 
      id: password.id,
      name: password.name,
      username: password.username,
      password: password.password,
      icon: password.icon,
      url: password.url,
      notes: password.notes 
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={t("search")}
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={handleBackPress} style={styles.closeButton}>
          <Icon name="times" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredPasswords}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
            <Icon name={item.icon} style={styles.icon} size={30} />
            <View style={styles.textsContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.passwordText}>
                {passwordVisible ? item.password : '************'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchPasswordScreen;
