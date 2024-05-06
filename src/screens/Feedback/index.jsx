import { View, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Feedback() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../../assets/wallpaper-feedback.png')}>

        <Text style={styles.texto}>Deixe sua sugestão para nosso próximo projeto</Text>

        <TextInput style={styles.input}></TextInput>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
}
