import React, { useState, useContext } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Modal, Button, FlatList, Alert } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PasswordContext } from '../Contexts/PasswordContext';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-paper';
import { lightStyles, darkStyles } from '../Styles/SettingsStyles';
import { useTheme } from '../Contexts/DarkMode';
import { useFontSize } from '../Contexts/FontSizeContext';
import { useLanguage } from '../Contexts/LanguageContext';

export default function SettingsScreen() {
  const { clearPasswords, passwordCount } = useContext(PasswordContext);
  const [bugReportVisible, setBugReportVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [fontSizeModalVisible, setFontSizeModalVisible] = useState(false);
  const { t } = useTranslation();
  const { isDarkTheme, toggleTheme } = useTheme();
  const { fontSize, changeFontSize } = useFontSize();
  const { language, changeLanguage } = useLanguage();

  const styles = isDarkTheme ? darkStyles : lightStyles;

  const handleLanguagePress = () => {
    setLanguageModalVisible(true);
  };

  const handleFontSizePress = () => {
    setFontSizeModalVisible(true);
  };

  const handleDelete = () => {
    Alert.alert(
      'Видалити базу даних',
      'Ви впевнені, що хочете видалити всю базу даних?',
      [
        { text: 'Скасувати', style: 'cancel' },
        {
          text: 'Видалити',
          onPress: () => {
            clearPasswords();
          }
        }
      ]
    );
  };

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Українська', value: 'ua' },
  ];

  const fontSizes = [
    { label: 'Small', value: 15 },
    { label: 'Medium', value: 17 },
    { label: 'Large', value: 18 },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.profile.backgroundColor }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileAvatarWrapper}></View>
        </View>
        <View>
          <Text style={styles.Text}>{t('statistics')}</Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 130, flexGrow: 1 }}>
          <View style={styles.section}>
            <View style={styles.profileRow}>
              <View style={[styles.profileRowIcon]}>
                <Icon name="shield" color={'white'} size={30} />
              </View>
              <View style={styles.profileRowTextContainer}>
                <Text style={styles.profileRowLabel}>{t('password_count')}</Text>
                <Text style={styles.profileRowSubLabel}>{passwordCount}</Text>
              </View>
              <View style={styles.rowSpacer} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: styles.Text.color }]}>{t('interface')}</Text>
            <View style={[styles.row, { backgroundColor: styles.row.backgroundColor }]}>
              <View style={[styles.rowIcon]}>
                <Icon name="moon-o" size={30} color="white" />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('dark_mode')}</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={toggleTheme}
                value={isDarkTheme}
              />
            </View>
            <TouchableOpacity style={[styles.row, { backgroundColor: styles.row.backgroundColor }]} onPress={handleFontSizePress}>
              <View style={[styles.rowIcon]}>
                <Icon name="font" size={30} color="white" />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('font')}</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.row, { backgroundColor: styles.row.backgroundColor }]} onPress={handleLanguagePress}>
              <View style={[styles.rowIcon]}>
                <Icon name="language" size={30} color="white" />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('language')}</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: styles.Text.color }]}>{t('about_app')}</Text>
            <TouchableOpacity onPress={() => setBugReportVisible(true)} style={[styles.row, { backgroundColor: styles.row.backgroundColor }]}>
              <View style={[styles.rowIcon]}>
                <FeatherIcon color="#fff" name="info" size={20} />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('about_me')}</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
            <View style={[styles.row, { backgroundColor: styles.row.backgroundColor }]}>
              <View style={[styles.rowIcon]}>
                <FeatherIcon color="#fff" name="tablet" size={20} />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('version')}: 1.0.0.0707</Text>
              <View style={styles.rowSpacer} />
            </View>
            <TouchableOpacity style={[styles.row, { backgroundColor: styles.row.backgroundColor }]} onPress={handleDelete}>
              <View style={[styles.rowIcon]}>
                <FeatherIcon color="#fff" name="trash" size={20} />
              </View>
              <Text style={[styles.rowLabel, { color: styles.rowLabel.color }, {fontSize}]}>{t('delete_db')}</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="delete" size={20} />
            </TouchableOpacity>
            <View>
              <Text style={[styles.VilensisText, { color: styles.VilensisText.color }]}>Vilensis™</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={bugReportVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setBugReportVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.textinmodal, { color: styles.textinmodal.color }]}>{t('bug_report_description')}</Text>
            <Button title={t('back')} color="black" onPress={() => setBugReportVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal
        visible={languageModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: styles.modalTitle.color }]}>{t('language')}</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => changeLanguage(item.value)}
                >
                  <View style={styles.radioButtonContainer}>
                    <RadioButton
                      value={item.value}
                      status={language === item.value ? 'checked' : 'unchecked'}
                      onPress={() => changeLanguage(item.value)}
                    />
                    <Text style={[styles.modalText, { color: styles.modalText.color }]}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.buttonContainer}>
              <Button
                title={t('cancel')}
                color="#0C727D"
                onPress={() => setLanguageModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={fontSizeModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFontSizeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: styles.modalTitle.color }]}>{t('font_size')}</Text>
            <FlatList
              data={fontSizes}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => changeFontSize(item.value)}
                >
                  <View style={styles.radioButtonContainer}>
                    <RadioButton
                      value={item.value}
                      status={fontSize === item.value ? 'checked' : 'unchecked'}
                      onPress={() => changeFontSize(item.value)}
                    />
                    <Text style={[styles.modalText, { color: styles.modalText.color }]}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.buttonContainer}>
              <Button
                title={t('cancel')}
                color="#0C727D"
                onPress={() => setFontSizeModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
