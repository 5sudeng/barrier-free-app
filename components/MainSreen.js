import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MainScreen() {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const onPressMenu = () => {
    navigation.navigate("Menu");
  };
  const onPressBld = () => {};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={onPressMenu}>
          <Text style={{ paddingTop: 47, paddingLeft: 5 }}>
            <Ionicons
              name="md-reorder-three-outline"
              size={50}
              color="#3d5f46"
            />
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#3d5f46",
            fontSize: 25,
            paddingTop: 45,
            paddingHorizontal: 40,
          }}
        >
          성균관대학교 배리어프리맵
        </Text>
      </View>
      <View style={{ ...styles.main }}>
        <Image
          source={require("../images/map_bg.png")}
          style={{
            width: width,
            height: height - height / 6,
          }}
        />
      </View>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 2.1,
            bottom: height - height / 2.98,
          }}
        >
          퇴계인문관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 2.4,
            bottom: height - height / 2.7,
          }}
        >
          다산경제관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 1.95,
            bottom: height - height / 2.52,
          }}
        >
          호암관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 2.4,
            bottom: height - height / 2.35,
          }}
        >
          경영관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 1.18,
            bottom: height - height / 2.8,
          }}
        >
          법학관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 1.38,
            bottom: height - height / 2.8,
          }}
        >
          수선관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 2.4,
            bottom: height - height / 1.83,
          }}
        >
          중앙학술정보관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 1.7,
            bottom: height - height / 1.86,
          }}
        >
          학생회관
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBld}>
        <Text
          style={{
            ...styles.bldList,
            left: width - width / 2.04,
            bottom: height - height / 1.41,
          }}
        >
          국제관
        </Text>
      </TouchableOpacity>
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
    paddingTop: 20,
  },
  bldList: {
    color: "black",
    fontSize: 17,
    position: "absolute",
    color: "#578463",
  },
  container: {
    flex: 1,
  },
});

export default MainScreen;
