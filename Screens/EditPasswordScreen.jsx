import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Clipboard, Linking, ScrollView } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PasswordContext } from '../Contexts/PasswordContext';
import IconPicker from './IconPickerScreen';
import Icon2 from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../Contexts/DarkMode';
import { lightStyles, darkStyles } from '../Styles/EditPasswordStyles';


const EditPasswordScreen = ({ route }) => {
  const { id, name: initialName, username: initialusername, password: initialPassword, icon: initialIcon, url: initialUrl, notes: initialNotes } = route.params;
  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState(initialusername);
  const [password, setPassword] = useState(initialPassword);
  const [url, setUrl] = useState(initialUrl || '');
  const [notes, setNotes] = useState(initialNotes || '');
  const [icon, setIcon] = useState(initialIcon || 'pencil');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const { t } = useTranslation();
  const { updatePassword, deletePassword } = useContext(PasswordContext);
  const navigation = useNavigation();
  const { isDarkTheme } = useTheme();
  const currentStyles = isDarkTheme ? darkStyles : lightStyles;

  const [nameHeight, setNameHeight] = useState(40);
  const [usernameHeight, setUsernameHeight] = useState(40);
  const [passwordHeight, setPasswordHeight] = useState(40);
  const [urlHeight, setUrlHeight] = useState(40);
  const [notesHeight, setNotesHeight] = useState(40);

  const handleDelete = () => {
    Alert.alert(
      'Видалити пароль',
      'Ви впевнені, що хочете видалити цей пароль?',
      [
        { text: 'Скасувати', style: 'cancel' },
        {
          text: 'Видалити', onPress: () => {
            deletePassword(id)
              .then(() => {
                navigation.goBack();
              })
              .catch(error => {
                console.error('Error deleting password', error);
              });
          }
        }
      ]
    );
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Error opening link', err));
  };

  const handleGeneratePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@()_+';
    let generatedPassword = '';
    for (let i = 0; i < 12; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  };

  const CopyToClipBoard = (text) => {
    Clipboard.setString(text);
  };

  const handleSave = () => {
    updatePassword(id, name, username, password, icon, url, notes)
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error updating password', error);
      });
  };

  const handleIconSelect = (selectedIcon) => {
    setIcon(selectedIcon);
    setPickerVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 129, flexGrow: 1, backgroundColor: currentStyles.container.backgroundColor }}>
      <View style={currentStyles.container}>
        <View style={currentStyles.header}>
          <View style={currentStyles.headerTextContainer}>
            <Text style={currentStyles.text}>{t("change_password")}</Text>
          </View>
          <TouchableOpacity onPress={handleDelete}>
            <Icon name="trash" style={currentStyles.iconContainer} size={30} color="red" />
          </TouchableOpacity>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.labelContainer}>
            <Text style={currentStyles.label}>{t("image")}</Text>
            <TouchableOpacity onPress={() => setPickerVisible(true)}>
              <Icon name={icon} style={currentStyles.iconContainer2} size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.labelContainer}>
            <Text style={currentStyles.label}>{t("name")}</Text>
            <TextInput
              style={[currentStyles.input, { height: Math.max(60, nameHeight) }]}
              placeholder=''
              value={name}
              onChangeText={setName}
              multiline
              onContentSizeChange={(e) => setNameHeight(e.nativeEvent.contentSize.height)}
            />
          </View>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.passwordLabelContainer}>
            <Text style={currentStyles.label}>{t("email")}</Text>
            <View style={currentStyles.passwordInputWrapper}>
              <TextInput
                style={[currentStyles.passwordInput, { height: Math.max(60, usernameHeight) }]}
                placeholder=''
                value={username}
                onChangeText={setUsername}
                multiline
                onContentSizeChange={(e) => setUsernameHeight(e.nativeEvent.contentSize.height)}
              />
              <TouchableOpacity onPress={() => CopyToClipBoard(username)}>
                <Icon2 name='copy' style={currentStyles.iconContainer3} size={24} color={'#F5F5DC'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.passwordLabelContainer}>
            <Text style={currentStyles.label}>{t("password")}</Text>
            <View style={currentStyles.passwordInputWrapper}>
              <TextInput
                style={[currentStyles.passwordInput, { height: Math.max(60, passwordHeight) }]}
                placeholder=''
                value={password}
                onChangeText={setPassword}
                multiline
                onContentSizeChange={(e) => setPasswordHeight(e.nativeEvent.contentSize.height)}
              />
              <TouchableOpacity onPress={() => CopyToClipBoard(password)}>
                <Icon2 name='copy' style={currentStyles.iconContainer3} size={24} color={'#F5F5DC'} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={currentStyles.generateButton} onPress={handleGeneratePassword}>
            <Text style={currentStyles.generateButtonText}>{t("generate_password")}</Text>
          </TouchableOpacity>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.passwordLabelContainer}>
            <Text style={currentStyles.label}>{t("url")}</Text>
            <View style={currentStyles.passwordInputWrapper}>
              <TextInput
                style={[currentStyles.passwordInput, { height: Math.max(60, urlHeight) }]}
                placeholder=''
                value={url}
                onChangeText={setUrl}
                multiline
                onContentSizeChange={(e) => setUrlHeight(e.nativeEvent.contentSize.height)}
              />
              {url ? (
                <TouchableOpacity onPress={() => openLink(url)}>
                  <Icon2 name='external-link' style={currentStyles.iconContainer3} size={24} color={'#F5F5DC'} />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>

        <View style={currentStyles.inputContainer}>
          <View style={currentStyles.labelContainer}>
            <Text style={currentStyles.label}>{t("notes")}</Text>
            <TextInput
              style={[currentStyles.input, { height: Math.max(60, notesHeight) }]}
              placeholder=''
              value={notes}
              onChangeText={setNotes}
              multiline
              onContentSizeChange={(e) => setNotesHeight(e.nativeEvent.contentSize.height)}
            />
          </View>
        </View>

        <View style={currentStyles.bottomContainer}>
          <TouchableOpacity style={currentStyles.button} onPress={() => navigation.goBack()}>
            <Text style={currentStyles.buttonText}>{t("cancel")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currentStyles.secondbutton} onPress={handleSave}>
            <Text style={currentStyles.buttonText}>{t("change")}</Text>
          </TouchableOpacity>
        </View>

        <IconPicker
          visible={isPickerVisible}
          onClose={() => setPickerVisible(false)}
          onSelect={handleIconSelect}
        />
      </View>
    </ScrollView>
  );
};

export default EditPasswordScreen;
