import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import classInfo from "./classInfo";

function Classroom() {
  const [whichRoom, setWhichRoom] = useState("");
  const navigation = useNavigation();
  const onChangeText = (room) => {
    setWhichRoom((prev) => room);
  };
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
          강의실 검색
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.searchbar}>
          <Text style={{ marginLeft: 12 }}>
            <AntDesign name="search1" size={30} color="#3d5f46" />
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"강의실 번호를 입력하세요"}
            keyboardType={"email-address"}
            returnKeyType={"search"}
            onSubmitEditing={null}
            onChangeText={onChangeText}
            value={whichRoom}
          />
        </View>
        <View
          style={{
            height: 1.5,
            marginHorizontal: 3,
            marginTop: 2,
            backgroundColor: "gray",
            marginBottom: 5,
          }}
        ></View>
        <ScrollView>
          {Object.keys(classInfo).map((key) => {
            if (key.includes(whichRoom))
              return (
                <View key={key}>
                  <View style={styles.classrooms}>
                    <Text style={styles.eachTxt}>{key}</Text>
                    <Text style={styles.eachEx}>{classInfo[key]}</Text>
                  </View>
                  <View style={styles.hr}></View>
                </View>
              );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    flex: 7,
    paddingTop: 5,
  },
  classrooms: {
    height: 78,
    justifyContent: "center",
    paddingLeft: 15,
  },
  input: {
    height: 40,
    fontSize: 23,
    paddingHorizontal: 30,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
  },
  hr: {
    height: 1.5,
    marginHorizontal: 16,
    backgroundColor: "lightgray",
  },
  eachTxt: {
    fontSize: 30,
    color: "#3d5f46",
  },
  eachEx: {
    marginTop: 2,
    fontSize: 19,
    paddingRight: 10,
  },
});

export default Classroom;
