import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dcabd',
    paddingHorizontal: 20,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#055245'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
  headerTextContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: -12,
  },
  iconContainer: {
    marginBottom: 3,
    marginHorizontal: -15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalView: {
    width: '80%', 
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '50%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconContainer2: {
    justifyContent: 'center',
    marginLeft: 95,
    color: 'white'
  },
  passwordLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 10
  },
  passwordContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#055245',
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    backgroundColor: '#0C727D',
    paddingRight: 5, 
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  iconContainer3: {
    justifyContent: 'center',
    marginLeft: 0,
    color: 'white',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    color: 'black'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#0C727D'
  },
  generateButton: {
    alignItems: 'center',
    marginTop: 12,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  text: {
    fontSize: 24,
    marginRight: 20,
    marginBottom: 0,
    marginTop: 7,
    color: '#F5F5DC',
    fontWeight: '800'
  },
  button: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  secondbutton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08494d',
    paddingHorizontal: 20,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#38666b'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
  headerTextContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: -12,
  },
  iconContainer: {
    marginBottom: 3,
    marginHorizontal: -15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalView: {
    width: '80%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '50%', 
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconContainer2: {
    justifyContent: 'center',
    marginLeft: 95,
    color: 'white'
  },
  passwordLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 10
  },
  passwordContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#055245',
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#38666b',
    paddingRight: 5, 
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    color: '#fff'
  },
  iconContainer3: {
    justifyContent: 'center',
    marginLeft: 10,
    color: 'white',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    color: 'white'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#38666b',
    color: '#fff'
  },
  generateButton: {
    alignItems: 'center',
    marginTop: 12,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  text: {
    fontSize: 24,
    marginRight: 20,
    marginBottom: 0,
    marginTop: 7,
    color: '#F5F5DC',
    fontWeight: '800'
  },
  button: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  secondbutton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'darkgreen'
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export { lightStyles, darkStyles };
