import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import usersRepository from "../../models/UsersRepository";

export default function User({ route }) {
    const navigation = useNavigation();
    const { data } = route.params;

    const editUser = () => {
        navigation.navigate("Register", { user: data, edit: true });
    }

    const deleteUser = () => {
        usersRepository.delete(data.id);
        navigation.navigate("Users");
    }
    

    return (
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={require('../../../assets/planta.jpg')}>

            <View style={styles.containerInfos}>
          {data ? (
            <Text style={styles.info}>Informações do Usuário</Text>
          ) : (
            <Text>Selecione um usuário para exibir seus detalhes</Text>
          )}


    
          <View style={styles.user}>
            <Text style={styles.subtitleDetalhes}>Detalhes</Text>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>{data.email}</Text>
            <Text style={styles.text}>{data.password}</Text>
            <Text style={styles.text}>{data.cellphone}</Text>
            
            <View style={styles.userActions}>
              <TouchableOpacity style={styles.editButton} onPress={editUser}>
                <Text style={styles.textButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
                <Text style={styles.textButton}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
          </ImageBackground>
        </View>
      );
}