import { View, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import { useState } from "react";

export default function Feedback() {

  const [textFeedback, setTextFeedback] = useState("");

  const clearInput = () => {
    setTextFeedback("");
    alert("Sugestão enviada com sucesso")
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../../assets/wallpaper-feedback.png')}>

        <View style={styles.containerNameCompany}>
          <Text style={styles.nameCompany}>ESG<Text style={styles.nameCompany2}>reen</Text></Text>
        </View>

        <Text style={styles.texto}>Deixe sua sugestão para nosso próximo projeto</Text>

        <TextInput
          style={styles.input}
          value={textFeedback}
          onChangeText={setTextFeedback}></TextInput>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton} onPress={clearInput}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
}
