import { ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
// import Title from "../../components/Title";
// import TouchButton from "../../components/TouchButton";

import User from "../../models/User";
import usersRepository from "../../models/UsersRepository";

export default function Register({ route }) {

  let { user, edit } = route.params

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setEmail(user.email);
      setPassword(user.password);
      setName(user.name);
      setCellphone(user.cellphone);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.Update(user.id, email, password, name, cellphone || 0);
      clearInputs();
      if (email == "" || password == "" || name == "" || cellphone == "") {
        clearInputs();
      } else {
        const newUser = new User(email, password, name, cellphone || 0);
        usersRepository.add(newUser);
        clearInputs();
      }
    }
    navigation.navigate("Users");
  }

  const clearInputs = () => {

    setIsUpdate(false);
    edit = false;
    setEmail("");
    setPassword("");
    setName("");
    setCellphone("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../../assets/wallpaper-form.png')}>
        <Text style={styles.title}>{isUpdate ? "Editar Usuário" : "Formulário"}</Text>
        <View style={styles.form}>

          <TextInput
            placeholder="e-mail"
            style={styles.userInput}
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="senha"
            style={styles.userInput}
            onChangeText={setPassword}
            value={password}
          />

          <TextInput
            placeholder="nome"
            style={styles.userInput}
            onChangeText={setName}
            value={name}
          />

          <TextInput
            placeholder="telefone"
            style={styles.userInput}
            onChangeText={setCellphone}
            value={cellphone}
            maxLength={15}
          />

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleUserAction}>
              <Text style={styles.text}>{isUpdate ? "Salvar Alterações" : "Cadastrar Usuário"}</Text>
            </TouchableOpacity>

            {isUpdate && (
              <TouchableOpacity style={styles.buttonCancel} onPress={clearInputs}>
                <Text style={styles.text}>Cancelar Edição</Text>
              </TouchableOpacity>
            )}
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}
