import React, { useState } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import styles from "./styles";

const PopUpMessage = ({ type, message, onClose }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
    onClose && onClose();
  };

  const getMessageStyle = () => {
    if (type === 'error') {
      return styles.errorText;
    } else if (type === 'success') {
      return styles.successText;
    }
    return styles.defaultText;
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={getMessageStyle()}>{message}</Text>
            <TouchableHighlight
              style={{ ...styles.closeButton, backgroundColor: "#2196F3" }}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Title;
