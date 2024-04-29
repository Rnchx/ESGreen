import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Users({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Register" title="Go to Register" />

      <TouchButton route="Donation" title="Go to Donation" />

      <TouchButton route="Feedback" title="Go to Feedback" />



      <View style={styles.user}>
        <Title title="User" />
        {/* <Text style={styles.text}>{data.name}</Text> */}
        {/*<Text style={styles.text}>{data.email}</Text>*/}
        {/*<Text style={styles.text}>{data.phone}</Text>*/}
        {/*<Text style={styles.text}>{data.address.city}</Text>*/}
        {/*<Text style={styles.text}>{data.address.state}</Text>*/}
      </View>
    </View>
  );
}
