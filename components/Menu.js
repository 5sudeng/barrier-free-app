import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function Menu() {
  const phoneNumber = "tel:027601092";
  const makeCall = () => {
    Linking.openURL(phoneNumber);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <Text style={{ paddingTop: 47, paddingLeft: 10 }}>
            <AntDesign name="caretleft" size={30} color="#3d5f46" />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#3d5f46",
            fontSize: 25,
            paddingTop: 45,
            paddingHorizontal: 135,
          }}
        >
          메뉴
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.menus}>
          <Text style={styles.menuIcon}>
            <AntDesign name="search1" size={50} color="#3d5f46" />
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Classroom")}>
            <Text style={{ ...styles.menuText, paddingHorizontal: 95 }}>
              강의실 검색
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menus}>
          <Text style={styles.menuIcon}>
            <MaterialIcons name="restaurant" size={50} color="#3d5f46" />
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RestaurantMR")}>
            <Text style={{ ...styles.menuText, paddingHorizontal: 70 }}>
              음식점 검색 (명륜)
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menus}>
          <Text style={styles.menuIcon}>
            <MaterialIcons name="restaurant" size={50} color="#3d5f46" />
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RestaurantYJ")}>
            <Text style={{ ...styles.menuText, paddingHorizontal: 70 }}>
              음식점 검색 (율전)
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menus}>
          <Text style={styles.menuIcon}>
            <Ionicons name="call-outline" size={50} color="#3d5f46" />
          </Text>
          <TouchableOpacity onPress={makeCall}>
            <Text style={{ ...styles.menuText, paddingHorizontal: 25 }}>
              장애학생지원센터로 연락하기
            </Text>
          </TouchableOpacity>
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
  menus: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontSize: 27,
    color: "#3d5f46",
  },
  menuIcon: {
    paddingLeft: 15,
  },
  container: {
    flex: 1,
  },
});

export default Menu;
