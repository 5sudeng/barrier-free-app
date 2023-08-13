import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import bldImageInfo from "./bldImageInfo";

const blds = {
  법학관: "bh",
  수선관: "ss",
  퇴계인문관: "tg",
  다산경제관: "ds",
  호암관: "ho",
  경영관: "ky",
  학생회관: "st",
  중앙학술정보관: "li",
  국제관: "kj",
};

function BldDetail({ route }) {
  const { width, height } = Dimensions.get("window");
  const { buildingName } = route.params;
  const navigation = useNavigation();
  const onPressMain = () => {
    navigation.navigate("MainScreen");
  };
  const bld = blds[buildingName];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menuBar}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={onPressMain}>
            <Text style={{ paddingTop: 47, paddingLeft: 5 }}>
              <AntDesign name="caretleft" size={30} color="#3d5f46" />
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 15,
          }}
        >
          <Text
            style={{
              color: "#3d5f46",
              fontSize: 25,
              paddingTop: 45,
              marginLeft: "-5%",
            }}
          >
            {buildingName}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.main }}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {bldImageInfo[bld].map((img, index) => {
            return (
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  key={index}
                  source={img}
                  style={{
                    width: width,
                    height: height / 3,
                    transform: [{ scale: 0.97 }],
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});

export default BldDetail;
