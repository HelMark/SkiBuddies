import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

    const mountainList = [
        { id: 1, name: "Galdhøpiggen" },
        { id: 2, name: "Glittertind" },
        { id: 3, name: "Store Styggedalstinden" },
        { id: 4, name: "Store Trolltind" },
        { id: 5, name: "Store Vengetind" },
        { id: 6, name: "Store Skagastølstind Vesttopp" },
        { id: 7, name: "Storen" },
        { id: 8, name: "Kyrkja" },
        { id: 9, name: "Vesle Trolltind" },
        { id: 10, name: "Store Austanbotntind" },
        { id: 11, name: "Vesle Styggedalstinden" },
        { id: 12, name: "Jervvasstind" },
        { id: 13, name: "Stetind" },
        { id: 14, name: "Surtningssue" },
        { id: 15, name: "Vesle Skagastølstind" },
        { id: 16, name: "Hurrungane Store Skagastølstind Nordre" },
        { id: 17, name: "Hurrungane Store Skagastølstind Midtre" },
        { id: 18, name: "Jotunheimen Store Skagastølstind Østre" },
        { id: 19, name: "Fannaråki" },
        { id: 20, name: "Gjertvasstind" },
        { id: 21, name: "Hurrungane Midtre Skagastølstind" },
        { id: 22, name: "Fannaråkbreen" },
        { id: 23, name: "Fannaråkhytta" },
        { id: 24, name: "Gråhøe" },
        { id: 25, name: "Falketind" },
        { id: 26, name: "Surtningssue Store" },
        { id: 27, name: "Steindalsnosi" },
        { id: 28, name: "Gjendehøe" },
        { id: 29, name: "Falketind Vestpillaren" },
        { id: 30, name: "Memurutind" },
        { id: 31, name: "Keilhaus topp" },
        { id: 32, name: "Knutsholstind" },
        { id: 33, name: "Folarskardnuten" },
        { id: 34, name: "Skarven" },
        { id: 35, name: "Store Høydalshøe" },
        { id: 36, name: "Skredahøe" },
        { id: 37, name: "Breidablikk topp" },
        { id: 38, name: "Søre Høgdabottstind" },
        { id: 39, name: "Vesle Styggedalstinden Sørausttopp" },
        { id: 40, name: "Stetinden Søraust" },
        { id: 41, name: "Vesle Skagastølstind Vesttopp" },
        { id: 42, name: "Trollryggen" },
        { id: 43, name: "Store Rauddalseggi" },
        { id: 44, name: "Glittertinden Nordtopp" },
        { id: 45, name: "Store Styggedalstinden Søre" },
        { id: 46, name: "Smørstabbtindan" },
        { id: 47, name: "Nordre Kalvehølotinden" },
        { id: 48, name: "Kvitingskjølen" },
        { id: 49, name: "Austre Memurutinden" },
        { id: 50, name: "Søre Midtmaradalstind" },
        { id: 51, name: "Vesle Vengetind" },
        { id: 52, name: "Søre Skagastølstinden" },
        { id: 53, name: "Skardstinden" },
        { id: 54, name: "Dyrhaugsryggen" },
        { id: 55, name: "Storjuvtinden" },
        { id: 56, name: "Semeltind" },
        { id: 57, name: "Glittertind Søre" },
        { id: 58, name: "Spiterstulen" },
        { id: 59, name: "Kvitingskjølen Vesttopp" },
        { id: 60, name: "Mohns Topp" },
        { id: 61, name: "Store Styggedalstinden Nordre" },
        { id: 62, name: "Gjertvasstind Søre" },
        { id: 63, name: "Vesle Memurutinden" },
        { id: 64, name: "Store Vengetind Vesttopp" },
        { id: 65, name: "Ytre Skagastølstinden" },
        { id: 66, name: "Blåhøe" },
        { id: 67, name: "Vesle Høydalshøe" },
        { id: 68, name: "Kyrkja Nordtopp" },
        { id: 69, name: "Steinsbreen" },
        { id: 70, name: "Kniven" },
        { id: 71, name: "Midtre Memurutinden" },
        { id: 72, name: "Steindalsnosi Vesttopp" },
        { id: 73, name: "Austre Styggedalstinden" },
        { id: 74, name: "Høgeggi" },
        { id: 75, name: "Ringstind" },
        { id: 76, name: "Tverråtinden" },
        { id: 77, name: "Kyrkja Søre" },
        { id: 78, name: "Søre Trolltind" },
        { id: 79, name: "Vesle Høghøe" },
        { id: 80, name: "Storjuvtinden Nordtopp" },
        { id: 81, name: "Storen Nordvest" },
        { id: 82, name: "Store Styggedalstinden Nordvest" },
        { id: 83, name: "Gjendebu" },
        { id: 84, name: "Grønskredfjellet" },
        { id: 85, name: "Vahajervi" },
        { id: 86, name: "Vesle Rauddalseggja" },
        { id: 87, name: "Austre Høgdabottstind" },
        { id: 88, name: "Skredahøe Vesttopp" },
        { id: 89, name: "Falketind Nordvesttopp" },
        { id: 90, name: "Vesle Kalvehølotinden" },
        { id: 91, name: "Store Høydalshøe Vesttopp" },
        { id: 92, name: "Austre Midtmaradalstind" },
        { id: 93, name: "Skagadølstind Vesttopp" },
        { id: 94, name: "Nordre Trolltind" },
        { id: 95, name: "Bollgardstind" },
        { id: 96, name: "Storhøe" },
        { id: 97, name: "Tordenskjoldsdalstind" },
        { id: 98, name: "Stetinden Vest" },
        { id: 99, name: "Rondslottet" }
      ];
      
      const DestinationSearchBar = () => {
        const [searchInput, setSearchInput] = useState("");
        const [filteredMountains, setFilteredMountains] = useState([]);
        const [isFocused, setIsFocused] = useState(false);
      
        const handleSearchInputChange = (input) => {
          setSearchInput(input);
          if (input.length > 3) {
            const filtered = mountainList.filter((mountain) =>
              mountain.name.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredMountains(filtered);
          } else {
            setFilteredMountains([]);
          }
        };
      
        const handleMountainSelection = (mountain) => {
          setSearchInput(mountain.name);
          setFilteredMountains([]);
        };

        const handleFocus=() => {
          setIsFocused(true)
        }
        const handleBlur = () => {
          setIsFocused(false)
        }
      
        return (
          <View style={styles.container}>
            <TextInput
              style={[styles.input, isFocused && styles.inputFocused]} 
              placeholder="Search destination..."
              value={searchInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={handleSearchInputChange}
            />
            <FlatList
              style={styles.resultsContainer}
              data={filteredMountains}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() => handleMountainSelection(item)}
                >
                  <Text style={styles.resultItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1
        },
        input: {
          width: "90%",
          height: 40,
          borderWidth: 2,
          borderColor: "#D3D3D3",
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 10,
        },
        resultsContainer: {
          width: "90%",
          maxHeight: 100,
        },
        resultItem: {
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#D3D3D3D3",
        },
        resultItemText: {
          fontSize: 16,
        },
        inputFocused: {
          borderColor: "#0096FF"
        }
      });
      
      export default DestinationSearchBar;