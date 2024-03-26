import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const CheckboxWithLabel = ({ label }: { label: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  const moveAnim = useRef(new Animated.Value(0)).current; // Dodajemy wartość animacji

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);

    // Ustawiamy animację
    Animated.timing(moveAnim, {
      toValue: isChecked ? 0 : 1, // Jeśli zaznaczone, przesuwamy do początkowej pozycji, w przeciwnym razie na koniec
      duration: 300, // Czas trwania animacji w ms
      useNativeDriver: true, // Używa natywnej obsługi animacji
    }).start();
  };

  // Ustawienie interpolacji dla przesunięcia
  const moveInterpolate = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0], // Przesunięcie o 40 pikseli w prawo
  });

  // Stylowanie z użyciem animacji
  const animatedStyle = {
    transform: [{ translateX: moveInterpolate }],
  };

  return (
    <TouchableOpacity
      style={[styles.container, isChecked ? styles.containerChecked : null]}
      onPress={toggleCheckbox}
    >
      <Animated.View
        style={[
          styles.checkbox,
          isChecked ? styles.checkboxChecked : null,
          animatedStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#3C3C3C",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },

  containerChecked: {
    justifyContent: "flex-end",
    borderColor: "#00FF0A",
  },
  checkbox: {
    width: 37,
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#3C3C3C",
  },

  checkboxChecked: {
    backgroundColor: "#00FF0A",
  },
});

export default CheckboxWithLabel;
