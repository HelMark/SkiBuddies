import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Hobbies = [
  "Biking",
  "Backcountry skiing",
  "Snowboarding",
  "Cross Country skiing",
  "Climbing",
  "Hiking",
];

const HobbiePicker = ( onChangeText, value) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const addHobby = (hobby) => {
    setSelectedHobbies((prevHobbies) => [...prevHobbies, hobby]);
  };

  const removeHobby = (hobby) => {
    setSelectedHobbies((prevHobbies) =>
      prevHobbies.filter((h) => h !== hobby)
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedHobbies.includes(item);

    if (isSelected) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => addHobby(item)}>
        <Text style={styles.dropdownItem}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderSelectedHobbies = () => {
    return selectedHobbies.map((hobby) => (
      <View key={hobby} style={styles.selectedHobbyContainer}>
        <Text style={styles.selectedHobbyLabel}>{hobby}</Text>
        <TouchableOpacity onPress={() => removeHobby(hobby)}>
          <FontAwesome5 name="times" size={14} color="#0096FF" />
        </TouchableOpacity>
      </View>
    ));
  };

  const renderDropdown = () => {
    if (!showDropdown) {
      return null;
    }

    return (
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleDropdown}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <FlatList
          nestedScrollEnabled={true}
          horizontal={true}
          data={Hobbies}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.hobbiesContainer}
        onPress={toggleDropdown}
      >
        <FontAwesome5
          name="skiing"
          size={20}
          color="#D3D3D3"
          style={{ marginRight: 5 }}
        />
        <View style={styles.selectedHobbiesContainer}>
          {selectedHobbies.length > 0 ? (
            renderSelectedHobbies()
          ) : (
            <Text style={styles.hobbiesLabel}>Hobbies</Text>
          )}
        </View>
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  hobbiesContainer: {
    flexDirection: "row",
    borderBottomColor: "#0096FF",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  hobbiesLabel: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    color: "#D3D3D3",
  },
  dropdownContainer: {
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    height: 80,
    paddingHorizontal: 8,
    position: "relative",
  },
  dropdownItem: {
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#0096FF",
    marginRight: 5,
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
    color: "#0096FF",
  },
  closeButton: {
    top: 8,
    left: 280,
    marginBottom: 7,
  },
  closeButtonText: {
    color: "#0096FF",
    fontSize: 14,
  },
  selectedHobbiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: 5,
  },
  selectedHobbyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 5,
    borderColor: "#0096FF",
    borderWidth: 2,
    marginBottom: 5,
  },
  selectedHobbyLabel: {
    color: "#0096FF",
    marginRight: 5,
    paddingVertical: 2
  },
});

export default HobbiePicker;
