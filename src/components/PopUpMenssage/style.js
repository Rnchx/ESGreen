import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
  },
  defaultText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
});

export default styles;