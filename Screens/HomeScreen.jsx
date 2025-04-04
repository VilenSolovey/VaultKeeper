import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PasswordContext } from '../Contexts/PasswordContext';
import { lightStyles, darkStyles } from '../Styles/HomeStyles';
import { useTheme } from '../Contexts/DarkMode';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { useFontSize } from '../Contexts/FontSizeContext';

const HomeScreen = () => {
  const { passwords, loadPasswords, passwordVisible, togglePasswordVisibility } = useContext(PasswordContext);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const { fontSize } = useFontSize();
  const { isDarkTheme } = useTheme();
  const currentStyles = isDarkTheme ? darkStyles : lightStyles;

  useEffect(() => {
    loadPasswords();
  }, []);

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

  const CopyToClipBoard = (text) => Clipboard.setString(text);

  const handleMorePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleSearchPress = () => {
    setModalVisible(false);
    navigation.navigate('SearchPasswordScreen');
  };

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.header}>
        <Text style={[currentStyles.appText]}>{t('app_name')}</Text>
        <TouchableOpacity onPress={handleMorePress} style={currentStyles.moreButton}>
          <Icon name="ellipsis-v" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={currentStyles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={currentStyles.centeredView}>
            <View style={currentStyles.modalView}>
              <TouchableOpacity style={currentStyles.menuItem} onPress={handleSearchPress}>
                <Icon name="search" size={20} color="black" style={currentStyles.icon} />
                <View style={currentStyles.textContainer1}>
                  <Text style={[currentStyles.modalText]}>{t('search_password')}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={currentStyles.menuItem} onPress={togglePasswordVisibility}>
                <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="black" style={currentStyles.icon} />
                <View style={currentStyles.textContainer}>
                  <Text style={[currentStyles.modalText]}>{t('toggle_visibility')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView contentContainerStyle={{ paddingBottom: 100, flexGrow: 1, backgroundColor: currentStyles.container.backgroundColor }}>
        {passwords.map((password, index) => (
          <TouchableOpacity key={index} style={currentStyles.rectangle} onPress={() => handlePress(password)}>
            <Icon name={password.icon} style={currentStyles.iconContainer} color={'#F5F5DC'} size={30} />
            <View style={currentStyles.textsContainer}>
              <Text style={[currentStyles.itemText, { fontSize }]}>{password.name}</Text>
              <Text style={[currentStyles.passwordText]}>
                {passwordVisible ? password.password : '************'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => CopyToClipBoard(password.password)}>
              <Icon2 name='copy' style={currentStyles.iconContainer2} color={'#F5F5DC'} size={25} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
