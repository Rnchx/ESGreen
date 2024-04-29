import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Feedback() {
  return (
    <View style={styles.container}>
      <Title title="Feedback" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Register" title="Go to Register" />

      <TouchButton route="Donation" title="Go to Donation" />
    </View>
  );
}
