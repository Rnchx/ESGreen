import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Register() {

  return (
    <View style={styles.container}>
      <Title title="Register" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Register" title="Go to Register" />

      <TouchButton route="Donation" title="Go to Donation" />

      <TouchButton route="Feedback" title="Go to Feedback" />

      <TouchButton route="Profile" title="Go to Profile" />

    </View>
  );
}
