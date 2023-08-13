import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mrInfo from "./mrInfo";

function RestaurantMR() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Text style={{ paddingTop: 47, paddingLeft: 10 }}>
            <AntDesign name="caretleft" size={30} color="#3d5f46" />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#3d5f46",
            fontSize: 25,
            paddingTop: 45,
            paddingHorizontal: 110,
          }}
        >
          명륜 음식점
        </Text>
      </View>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.5826,
              longitude: 126.9992,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            {Object.keys(mrInfo).map((key) => {
              return (
                <Marker
                  pinColor="#3d5f46"
                  key={key}
                  coordinate={{
                    latitude: mrInfo[key].point[1],
                    longitude: mrInfo[key].point[0],
                  }}
                  title={key}
                  description={mrInfo[key].description}
                />
              );
            })}
          </MapView>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  menuBar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    flex: 7,
    paddingTop: 5,
  },
  container: {
    flex: 1,
  },
});

export default RestaurantMR;
