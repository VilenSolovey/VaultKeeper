import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 5,
    },
    modalView: {
      margin:30,
      backgroundColor: '#9dcabd',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonClose: {
      backgroundColor: '#0C727D',
      borderRadius: 10,
      padding:10,
      elevation:2,
      marginTop: 9,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    iconButton: {
      padding:10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
    },
    modalText: {
      textAlign: 'left',
      fontSize: 20,
      marginBottom:10,
      color: '#0C727D',
      fontWeight: 'thin'
    },
  });
export default styles;