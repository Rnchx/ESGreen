import { useState } from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";

import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Donation() {

  const [valueDonation, setValueDonation] = useState("");
  const [cvvDonation, setCvvDonation] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [donation, setDonation] = useState(0);

  const clearInputs = () => {
    setNumberCard("");
    setCvvDonation("");
    setValueDonation("");
  }

  function counter() {
    if(cvvDonation === "" || numberCard === "" || valueDonation === "") {
      alert("Preencha todos os campos.");
    } else if (valueDonation === "" || valueDonation === "0") {
      alert("O valor da doação precisa ser a partir de 1 dólar.");
    } else {
      setDonation(donation + 1);
      clearInputs();
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./../../../assets/planta.donation.jpg')}>

        <View style={styles.container2}>
          <Text style={styles.text}>Faça sua doação a partir de 1 dólar</Text>

          <View style={styles.card}>
            <View style={styles.card2}>
              <View style={styles.viewIcons2}>
                <View style={styles.viewIcons}>
                  <Text style={styles.textViewIcons}>Aceitamos</Text>
                  <View style={styles.icons}>
                    <FontAwesome name="credit-card" size={27} color="white" />
                    <FontAwesome name="credit-card-alt" size={24} color="white" />
                    <FontAwesome6 name="pix" size={24} color="white" />
                  </View>
                </View>
              </View>

              <View style={styles.form}>

                <View style={styles.input}>
                  <FontAwesome6 name="circle-info" size={24} color="#2C6D0C" />
                  <TextInput
                    placeholder="Número do cartão"
                    value={numberCard}
                    onChangeText={setNumberCard}
                    style={styles.donationInput}
                  />
                </View>

                <View style={styles.input}>
                  <MaterialIcons name="password" size={24} color="#2C6D0C" />
                  <TextInput
                    placeholder="CVV"
                    value={cvvDonation}
                    onChangeText={setCvvDonation}
                    style={styles.donationInput}
                  />
                </View>

                <View style={styles.input}>
                  <MaterialIcons name="attach-money" size={24} color="#2C6D0C" />
                  <TextInput
                    placeholder="Valor da doação"
                    value={valueDonation}
                    onChangeText={setValueDonation}
                    style={styles.donationInput}
                  />
                </View>

                <View style={styles.viewButton}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={counter}>
                    <Text style={styles.textButton}>Doar</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>

          <View style={styles.donation}>
            <Text style={styles.donationText}>Doações registradas</Text>

            <Text style={styles.donationText}>{donation}</Text>
          </View>

        </View>
      </ImageBackground >
    </View >
  );
}
