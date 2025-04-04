import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dcabd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,
    width: '100%'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#055245'
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 95,
    color: 'white'
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
    marginBottom: 25,
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  passwordLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 10
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    backgroundColor: '#0C727D',
    paddingRight: 7,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  iconContainer3: {
    justifyContent: 'center',
    marginRight: 0,
    color: 'white',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08494d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,
    width: '100%'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#38666b'
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 95,
    color: 'white'
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
    backgroundColor: '#38666b'
  },
  generateButton: {
    alignItems: 'center',
    marginTop: 12,
    padding: 10,
    backgroundColor: '#0056b3',
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
    marginBottom: 25,
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  passwordLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 10
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#38666b',
    paddingRight: 7,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  iconContainer3: {
    justifyContent: 'center',
    marginRight: 0,
    color: 'white',
  },
});

export { lightStyles, darkStyles };
