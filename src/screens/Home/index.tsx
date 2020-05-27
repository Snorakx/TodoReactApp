import React, { FC } from "react";
import {
  Button,
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import Avatar from "../../components/Home/avatar";
import More from "../../components/Home/more";
import Info from "../../components/Home/info";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <View style={styles.container}>
      <Avatar />
      <Info />
      <More />
    </View>
  );
};

export default Home;
