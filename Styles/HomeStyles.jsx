import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#9dcabd',
    padding: 22,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  moreButton: {
    padding: 10,
    color: '#F5F5DC',
  },
  rectangle: {
    height: 70,
    width: 320,
    backgroundColor: "#0C727D",
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 5,
  },
  textsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  iconContainer2: {
    width: 30,
    alignItems: 'center',
    marginRight: 5,
  },
  icon: {
    marginRight: 10,
  },
  appText: {
    fontSize: 24,
    color: '#F5F5DC',
    alignSelf: 'flex-start',
    marginBottom: 13,
    fontWeight: '800',
  },
  itemText: {
    fontSize: 20,
    color: '#F5F5DC',
  },
  passwordText: {
    fontSize: 15,
    color: '#F5F5DC',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 9,
    width: '100%',
    justifyContent: 'space-between',
  },
  textContainer1: {
    flex: 1,
    paddingHorizontal: 2.3,
  },
  textContainer: {
    flex: 1,
  },
  modalText: {
    textAlign: 'left',
    fontSize: 16,
    color: '#0C727D',
    fontWeight: '500',
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#08494d',
    padding: 22,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  moreButton: {
    padding: 10,
    color: '#F5F5DC',
  },
  rectangle: {
    height: 70,
    width: 320,
    backgroundColor: "#38666b",
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 5,
  },
  textsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  iconContainer2: {
    width: 30,
    alignItems: 'center',
    marginRight: 5,
  },
  icon: {
    marginRight: 10,
  },
  appText: {
    fontSize: 24,
    color: '#F5F5DC',
    alignSelf: 'flex-start',
    marginBottom: 13,
    fontWeight: '800',
  },
  itemText: {
    fontSize: 20,
    color: 'white',
  },
  passwordText: {
    fontSize: 15,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 9,
    width: '100%',
    justifyContent: 'space-between',
  },
  textContainer1: {
    flex: 1,
    paddingHorizontal: 2.3,
  },
  textContainer: {
    flex: 1,
  },
  modalText: {
    textAlign: 'left',
    fontSize: 16,
    color: '#38666b',
    fontWeight: '500',
  },
});
