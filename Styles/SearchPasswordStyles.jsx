import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#9dcabd',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#0C727D',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
  closeButton: {
    marginLeft: 5,
    padding: 10,
    marginTop: -1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0C727D',
  },
  icon: {
    color: '#0C727D',
    marginRight: 20,
    width: 30,
    textAlign: 'center',
  },
  textsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  passwordText: {
    fontSize: 16,
    color: 'black',
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#08494d',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#38666b',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
  closeButton: {
    marginLeft: 5,
    padding: 10,
    marginTop: -1
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#38666b',
  },
  icon: {
    color: 'white',
    marginRight: 20,
    width: 30,
    textAlign: 'center',
  },
  textsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  passwordText: {
    fontSize: 16,
    color: 'white',
  },
});
