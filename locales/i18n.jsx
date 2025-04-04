import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

const resources = {
  en: {
    translation: {
      "app_name": "VaultKeeper",
      "search_password": "Search Password",
      "toggle_visibility": "Toggle Visibility",
      "password_count": "Amount of Passwords",
      "login_with_passcode":"login with passcode",
      "statistics": "Statistics",
      "interface": "Interface",
      "dark_mode": "Dark Mode",
      "font": "Font",
      "language": "Language",
      "about_app": "About App",
      "about_me": "About Me",
      "version": "Version",
      "delete_db": "Delete Database",
      "bug_report_description": "I'm a young developer who created this app myself for my own use to conveniently store passwords. This is my first app.",
      "back": "Back",
      "cancel": "Cancel",
      "password":"Password",
      "name":"Name",
      "email":"Email",
      "new_password":"New Password",
      "generate_password":"Generate password",
      "url":"URL",
      "notes":"Notes",
      "create":"Create",
      "image":"Icon",
      "change":"Change",
      "change_password":"Password Change",
      "search":"Search",
      "font_size":'Size '
    }
  },
  ua: {
    translation: {
      "app_name": "VaultKeeper",
      "search_password": "Пошук Пароля",
      "toggle_visibility": "Відображення",
      "login_with_passcode":"Увійти за допомогою пароля",
      "statistics": "Статистика",
      "password_count": "Кількість паролів",
      "interface": "Інтерфейс",
      "dark_mode": "Темний режим",
      "font": "Шрифт",
      "language": "Мова",
      "about_app": "Про Додаток",
      "about_me": "Про мене",
      "version": "Версія",
      "delete_db": "Видалити Базу Даних",
      "bug_report_description": "Я молодий розробник, який створив цей додаток сам для власного користування, щоб зручно зберігати паролі. Це мій перший додаток.",
      "back": "Назад",
      "cancel": "Скасувати",
      "password":"Пароль",
      "name":"Назва",
      "email":"Пошта",
      "new_password":"Новий Пароль",
      "generate_password":"Згенерувати Пароль",
      "url":"Посилання",
      "notes":"Нотатки",
      "create":"Створити",
      "image":"Іконка",
      "change":"Змінити",
      "change_password":"Зміна пароля",
      "search":"Пошук",
      "font_size":'Розмір'
    }
  }
};

const getDeviceLanguage = () => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return locale ? locale.split('_')[0] : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
