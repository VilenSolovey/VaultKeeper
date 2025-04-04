import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/IconPickerStyles'
const icons = [
  'pencil', 'sort', 'search', 'tags', 'user', 'lock', 'heart', 'star','gamepad', 'google', 'money', 'bank', 'globe', 'facebook', 'twitter', 'instagram', 'linkedin',
  'youtube', 'amazon', 'apple', 'dropbox', 'cloud', 'envelope', 'github', 'gitlab', 'paypal', 'credit-card', 'file', 'user', 'key', 'shield', 'wifi', 'shopping-cart',
  'car', 'home', 'university', 'music', 'film', 'ticket', 'calendar', 'phone', 'comment', 'bell', 'bolt', 'book', 'briefcase', 'building', 'camera', 'code', 'cogs',
  'database', 'desktop', 'download', 'exchange', 'fire', 'spotify', 'snapchat', 'slack', 'twitch', 'steam', 'phone',
  'edge', 'windows', 'linkedin', 'reddit', 'pinterest', 'whatsapp', 'telegram', 'comments',
  'medium', 'dribbble', 'behance', 'flickr', 'tumblr', 'rss', 'yahoo', 'btc', 
  'cc-visa', 'cc-mastercard', 'cc-amex', 'map', 'map-marker', 'map-pin', 'google-wallet', 'chrome',
  'sticky-note', 'clipboard', 'archive','google-plus','graduation-cap','diamond','gamepad','language',
  'book', 'apple','tv'
];

const IconPicker = ({ visible, onClose, onSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Виберіть іконку</Text>
          <FlatList
            data={icons}
            numColumns={4}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.iconButton} onPress={() => onSelect(item)}>
                <Icon name={item} size={30} color="black" />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
            <Text style={styles.textStyle}>Закрити</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


export default IconPicker;
