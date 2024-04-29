import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Register" title="Go to Register" />

      <TouchButton route="Donation" title="Go to Donation" />

      <TouchButton route="Feedback" title="Go to Feedback" />
    </View>
  );
}
