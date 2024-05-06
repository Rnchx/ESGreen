import { View, Text, TextInput } from "react-native";

import styles from "./styles";
import TouchButton from "../../components/TouchButton";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Donation() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doações</Text>

      <View>
        <Text>Faça sua doação a partir de 1 dólar</Text>
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
              style={styles.userInput}
            />
          </View>

          <View style={styles.input}>
            <MaterialIcons name="password" size={24} color="#2C6D0C" />
            <TextInput
              placeholder="CVV"
              style={styles.userInput}
            />
          </View>

          <View style={styles.input}>
            <MaterialIcons name="attach-money" size={24} color="#2C6D0C" />
            <TextInput
              placeholder="Valor da doação"
              style={styles.userInput}
            />
          </View>

        </View>
      </View>

    </View>
  );
}
