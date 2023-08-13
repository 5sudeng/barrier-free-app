import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import yjInfo from "./yjInfo";

function RestaurantYJ() {
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
          율전 음식점
        </Text>
      </View>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.2971378,
              longitude: 126.9707945,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {Object.keys(yjInfo).map((key) => {
              return (
                <Marker
                  key={key}
                  pinColor="#3d5f46"
                  coordinate={{
                    latitude: yjInfo[key].point[1],
                    longitude: yjInfo[key].point[0],
                  }}
                  title={key}
                  description={yjInfo[key].description}
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

export default RestaurantYJ;
