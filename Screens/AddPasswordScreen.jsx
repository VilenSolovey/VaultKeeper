import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Octicons';
import { useTranslation } from 'react-i18next';

import { PasswordContext } from '../Contexts/PasswordContext';
import IconPicker from './IconPickerScreen';
import { useTheme } from '../Contexts/DarkMode';
import { lightStyles, darkStyles } from '../Styles/AddPasswordStyles';

const AddPasswordScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [icon, setIcon] = useState('pencil');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const { addPassword } = useContext(PasswordContext);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();
  const [nameHeight, setNameHeight] = useState(40);
  const [usernameHeight, setUsernameHeight] = useState(40);
  const [passwordHeight, setPasswordHeight] = useState(40);
  const [urlHeight, setUrlHeight] = useState(100);
  const [notesHeight, setNotesHeight] = useState(40);
  const styles = isDarkTheme ? darkStyles : lightStyles;

  const handleGeneratePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@()_+';
    let generatedPassword = '';
    for (let i = 0; i < 12; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    addPassword(name, username, password, icon, url, notes)
      .then(() => {
        setName('');
        setUsername('');
        setPassword('');
        setUrl('');
        setNotes('');
      })
      .catch(error => {
        console.error('Error adding password', error);
      });
    navigateBack();
  };

  const handleIconSelect = (selectedIcon) => {
    setIcon(selectedIcon);
    setPickerVisible(false);
  };

  const fetchCopyText = async () => {
    const text = await Clipboard.getString();
    setPassword(text);
  };

  const fetchCopyEmail = async () => {
    const text = await Clipboard.getString();
    setUsername(text);
  };

  const fetchCopyURL = async () => {
    const text = await Clipboard.getString();
    setUrl(text);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 129, flexGrow: 1, backgroundColor: styles.container.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.text}>{t("new_password")}</Text>

        <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{t("image")}</Text>
            <TouchableOpacity onPress={() => setPickerVisible(true)}>
              <Icon name={icon} style={styles.iconContainer} size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{t("name")}</Text>
            <TextInput
              style={[styles.input, { height: Math.max(60, nameHeight) }]}
              placeholder=''
              value={name}
              onChangeText={setName}
              multiline
              onContentSizeChange={(e) => setNameHeight(e.nativeEvent.contentSize.height)}
              textBreakStrategy="simple" 
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordLabelContainer}>
            <Text style={styles.label}>{t("email")}</Text>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={[styles.passwordInput, { height: Math.max(60, usernameHeight) }]}
                placeholder=''
                value={username}
                onChangeText={setUsername}
                multiline
                onContentSizeChange={(e) => setUsernameHeight(e.nativeEvent.contentSize.height)}
                textBreakStrategy="simple" 
              />
              <TouchableOpacity onPress={fetchCopyEmail}>
                <Icon2 name='paste' style={styles.iconContainer3} size={24} color={'#F5F5DC'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordLabelContainer}>
            <Text style={styles.label}>{t("password")}</Text>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={[styles.passwordInput, { height: Math.max(60, passwordHeight) }]}
                placeholder=''
                value={password}
                onChangeText={setPassword}
                multiline
                onContentSizeChange={(e) => setPasswordHeight(e.nativeEvent.contentSize.height)}
                textBreakStrategy="simple" 
              />
              <TouchableOpacity onPress={fetchCopyText}>
                <Icon2 name='paste' style={styles.iconContainer3} size={24} color={'#F5F5DC'} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.generateButton} onPress={handleGeneratePassword}>
            <Text style={styles.generateButtonText}>{t("generate_password")}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordLabelContainer}>
            <Text style={styles.label}>{t("url")}</Text>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={[styles.passwordInput, { height: Math.max(60, urlHeight) }]}
                placeholder=''
                value={url}
                onChangeText={setUrl}
                multiline
                onContentSizeChange={(e) => setUrlHeight(e.nativeEvent.contentSize.height)}
                textBreakStrategy="simple" 
              />
              <TouchableOpacity onPress={fetchCopyURL}>
                <Icon2 name='paste' style={styles.iconContainer3} size={24} color={'#F5F5DC'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{t("notes")}</Text>
            <TextInput
              style={[styles.input, { height: Math.max(60, notesHeight) }]}
              placeholder=''
              value={notes}
              onChangeText={setNotes}
              multiline
              onContentSizeChange={(e) => setNotesHeight(e.nativeEvent.contentSize.height)}
              textBreakStrategy="simple" 
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={navigateBack}>
            <Text style={styles.buttonText}>{t("cancel")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondbutton} onPress={handleSave}>
            <Text style={[styles.buttonText]}>{t("create")}</Text>
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

export default AddPasswordScreen;
