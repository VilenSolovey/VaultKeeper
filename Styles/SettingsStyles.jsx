import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  profile: {
    padding: 24,
    backgroundColor: '#9dcabd',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#9dcabd',
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-start', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', 
  },
  buttonContainer: {
    marginTop: 20, 
    width: '100%',
    alignItems: 'center',
  },
  textinmodal:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
    color: '#F5F5DC'
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: -2,
    color: '#F5F5DC',
    marginRight: 130,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  Text:{
    fontSize: 24,
    color: '#F5F5DC',
    alignSelf: 'flex-start',
    marginBottom: 0,
    marginTop: -26,
    marginHorizontal: 24,
    fontWeight: '800'
  },

  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 1,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  modalText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 9,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },

  section: {
    paddingHorizontal: 24,
    marginTop: 25
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#F5F5DC',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#0C727D',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    height: 75, 
    backgroundColor: '#0C727D',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  profileRowIcon: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginRight:34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileRowTextContainer: {
    alignItems: 'center', 
  },
  profileRowLabel: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#F5F5DC',
  },
  profileRowSubLabel: {
    fontSize: 16, 
    fontWeight: '400',
    color: '#F5F5DC',
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#F5F5DC',
  },
  VilensisText:{
    fontSize: 17,
    marginLeft: 132,
    fontWeight: '100',
    color: '#0C727D'
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

const darkStyles = StyleSheet.create({
  ...lightStyles,
  profile: {
    ...lightStyles.profile,
    backgroundColor: '#08494d',
  },
  modalContent: {
    ...lightStyles.modalContent,
    backgroundColor: '#333',
  },
  modalText: {
    ...lightStyles.modalText,
    color: '#FFF',
  },
  Text: {
    ...lightStyles.Text,
    color: '#FFF',
  },
  profileName: {
    ...lightStyles.profileName,
    color: '#FFF',
  },
  profileAddress: {
    ...lightStyles.profileAddress,
    color: '#AAA',
  },
  sectionTitle: {
    ...lightStyles.sectionTitle,
    color: '#]]',
  },
  row: {
    ...lightStyles.row,
    backgroundColor: '#38666b',
  },
  profileRow: {
    ...lightStyles.profileRow,
    backgroundColor: '#38666b',
  },
  profileRowLabel: {
    ...lightStyles.profileRowLabel,
    color: '#FFF',
  },
  profileRowSubLabel: {
    ...lightStyles.profileRowSubLabel,
    color: '#FFF',
  },
  rowLabel: {
    ...lightStyles.rowLabel,
    color: '#FFF',
  },
  VilensisText: {
    ...lightStyles.VilensisText,
    color: '#FFF',
  },
});

export { lightStyles, darkStyles };
