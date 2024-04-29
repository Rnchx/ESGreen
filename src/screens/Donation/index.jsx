import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Donation() {
  return (
    <View style={styles.container}>
      <Title title="Donation" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Register" title="Go to Register" />

      <TouchButton route="Feedback" title="Go to Feedback" />

    </View>
  );
}
