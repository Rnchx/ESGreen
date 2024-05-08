import { ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./styles";

import usersRepository from "../../models/UsersRepository";
import User from "../../models/User";

export default function Register({ route }) {
  let { user, edit } = route.params

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  // const [isError, setIsError] = useState(false);

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
    } else if (email == "" || password == "" || name == "" || cellphone == "") {
      alert("Preencha todos os campos");
    } else {
      const newUser = new User(email, password, name, cellphone || 0);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Users");
  };

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
        <View style={styles.containerNameCompany}>
          <Text style={styles.nameCompany}>ESG<Text style={styles.nameCompany2}>reen</Text></Text>
        </View>
        <Text style={styles.title}>{isUpdate ? "Editar Usuário" : "Formulário"}</Text>
        <View style={styles.containerForm}>
          <View style={styles.form}>

            <View style={styles.formInputIcons}>
              <View style={styles.containerIcon}>
                <Entypo name="email" size={18} color="white" />
              </View>
              <TextInput
                placeholder="E-mail"
                style={styles.userInput}
                onChangeText={setEmail}
                value={email}
                selectionColor={"white"}
              />
            </View>

            <View style={styles.formInputIcons}>
              <View style={styles.containerIcon}>
                <MaterialIcons name="password" size={18} color="white" />
              </View>
              <TextInput
                placeholder="Senha"
                style={styles.userInput}
                onChangeText={setPassword}
                value={password}
              />
            </View>

            <View style={styles.formInputIcons}>
              <View style={styles.containerIcon}>
                <MaterialCommunityIcons name="human-child" size={18} color="white" />
              </View>
              <TextInput
                placeholder="Nome"
                style={styles.userInput}
                onChangeText={setName}
                value={name}
              />
            </View>

            <View style={styles.formInputIcons}>
              <View style={styles.containerIcon}>
                <MaterialCommunityIcons name="cellphone" size={18} color="white" />
              </View>
              <TextInput
                placeholder="Telefone"
                style={styles.userInput}
                onChangeText={setCellphone}
                value={cellphone}
                maxLength={15}
              />
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.button} onPress={handleUserAction}>
                <Text style={styles.text}>{isUpdate ? "Salvar Alterações" : "Cadastrar"}</Text>
              </TouchableOpacity>

              {isUpdate && (
                <TouchableOpacity style={styles.buttonCancel} onPress={clearInputs}>
                  <Text style={styles.text}>Cancelar Edição</Text>
                </TouchableOpacity>
              )}
            </View>

          </View>
        </View>
      </ImageBackground >
    </View >
  );
}
