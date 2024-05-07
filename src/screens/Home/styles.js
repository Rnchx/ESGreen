import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: '100%',
  },

  logo: {
    width: 400,
    height: 350,
  },

  containerTitulo: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 28,
    marginBottom: 20
  },

  titulo: {
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  },

  subtitulo: {
    color: 'white',
    fontSize: 22,
  },

  containerInfoEmpresa: {
    margin: 10,
    padding: 10,
  },

  texto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  scrollviewArea: {
    maxHeight: 230
  },

  containerEsgMensagem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 14
  },

  textoEsg: {
    fontWeight: "400",
    color: "white",
    fontSize: 16
  },

  textoEsgLetrasMaiuscula: {
    fontWeight: "800",
    color: "white",
    fontSize: 15
  }
});

export default styles;
