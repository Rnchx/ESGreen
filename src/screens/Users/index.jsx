import { useState, useEffect } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
// import Title from "../../components/Title";

import usersRepository from "../../models/UsersRepository";

export default function Users() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../../assets/wallpaper-register.png')}>
      <View style={styles.containerNameCompany}>
        <Text style={styles.nameCompany}>ESG<Text style={styles.nameCompany2}>reen</Text></Text>
        </View>
        <Text style={styles.title1}>Usuários</Text>
        <View style={styles.titlePage}>
          <Text style={styles.title}>Cadastrados</Text>
        </View>
        
        {allUsers.length > 0 ? (
          <View style={styles.containerUserItemPai}>
            {allUsers.map((user) => (
              <View style={styles.containerUserItem}>
                <View key={user.id} style={styles.userItem}>
                  <View>
                    <Text style={styles.userName}>{user.password}</Text>
                  </View>

                  <View style={styles.userActions}>
                    <TouchableOpacity
                      style={styles.detailsButton}
                      onPress={() => navigation.navigate("User", { data: user })}
                    >
                      <Text style={styles.textButton}>Detalhes</Text>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}

      </ImageBackground>
    </View>
  );
}
