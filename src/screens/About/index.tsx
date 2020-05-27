import React, { FC } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { EvilIcons } from "react-native-vector-icons";
import HeaderforAbout from "../../components/About/HeaderForAbout";
import { Dimensions } from "react-native";

const wW = Dimensions.get("window").width;
const hW = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8db88f",
    flex: 1,
  },
  placePhoto: {
    marginTop: 0.25 * wW,
    width: 0.7 * wW,
    height: 0.5 * wW,
    marginLeft: wW / 2 - (0.7 * wW) / 2,
    borderRadius: wW / 50,
  },
  text1: {
    position: "absolute",
    marginTop: Constants.statusBarHeight,
    color: "white",
    width: 0.3 * wW,
    textAlign: "center",
    fontSize: 0.05 * wW,
    marginLeft: wW / 2 - (0.3 * wW) / 2,
  },
  text2: {
    color: "white",
    width: 0.7 * wW,
    textAlign: "justify",
    marginLeft: wW / 2 - (0.7 * wW) / 2,
  },
  placeBox: {
    backgroundColor: "#8db88f",
    width: wW,
  },
  cityName: {
    position: "absolute",
    marginTop: 0.08 * wW,
    width: 0.4 * wW,
    marginLeft: "31%",
    fontSize: 0.12 * wW,
  },
  btnnext: {
    position: "absolute",
    backgroundColor: "#8db88f",
    width: 50,
    height: hW,
    marginTop: Constants.statusBarHeight,
    right: 0,
  },
  btnback: {
    position: "absolute",
    backgroundColor: "#8db88f",
    width: 50,
    height: hW,
    marginTop: Constants.statusBarHeight,
    left: 0,
  },
  arrow: {
    marginTop: 0.5 * hW,
    fontSize: 0.1 * wW,
  },
});

interface IAboutProps {}

const About: FC<IAboutProps> = () => {
  return (
    <View style={styles.container}>
      <HeaderforAbout />
      <ScrollView
        horizontal={true}
        ref={(node) => {
          this.scroller = node;
        }}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.placeBox}>
          <TouchableOpacity
            style={styles.btnnext}
            onPress={() => {
              this.scroller.scrollTo({ x: wW, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-right" style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.cityName}>Paris</Text>
          <Image
            style={styles.placePhoto}
            source={require("../../assets/Europe/paris.png")}
          />
          <Text style={styles.text2}>
            Paris has it all, which is why it’s as close to a must-see as there
            is in Europe. Food, history, art, culture, and beauty around every
            corner. A highlight for me is doing a bike tour around the city.
          </Text>
        </View>
        <View style={styles.placeBox}>
          <TouchableOpacity
            style={styles.btnnext}
            onPress={() => {
              this.scroller.scrollTo({ x: wW * 2, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-right" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnback}
            onPress={() => {
              this.scroller.scrollTo({ x: 0, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-left" style={styles.arrow} />
          </TouchableOpacity>

          <Text style={styles.cityName}>Barcelona</Text>
          <Image
            style={styles.placePhoto}
            source={require("../../assets/Europe/barca.png")}
          />
          <Text style={styles.text2}>
            My favorite city in Spain. Packed with great food, lively nightlife,
            art, architecture, and eye popping sightseeing. A great holiday
            destination for families too.
          </Text>
        </View>
        <View style={styles.placeBox}>
          <TouchableOpacity
            style={styles.btnnext}
            onPress={() => {
              this.scroller.scrollTo({ x: wW * 3, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-right" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnback}
            onPress={() => {
              this.scroller.scrollTo({ x: wW, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-left" style={styles.arrow} />
          </TouchableOpacity>

          <Text style={styles.cityName}>Santorini</Text>
          <Image
            style={styles.placePhoto}
            source={require("../../assets/Europe/santorini.png")}
          />
          <Text style={styles.text2}>
            The single best holiday destination in Europe (but I might be
            biased). The caldera views are as incredible as anything you’ll see
            anywhere. Sunsets, hikes, boat tours, local wines, black volcanic
            beaches, and the most luxurious hotels along the Mediterranean.
            Please, don’t miss Santorini.
          </Text>
        </View>
        <View style={styles.placeBox}>
          <TouchableOpacity
            style={styles.btnnext}
            onPress={() => {
              this.scroller.scrollTo({ x: 0, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-left" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnback}
            onPress={() => {
              this.scroller.scrollTo({ x: wW * 2, y: 0, animated: true });
            }}
          >
            <EvilIcons name="arrow-left" style={styles.arrow} />
          </TouchableOpacity>

          <Text style={styles.cityName}>Galway</Text>
          <Image
            style={styles.placePhoto}
            source={require("../../assets/Europe/galway.png")}
          />
          <Text style={styles.text2}>
            Dublin has become a thriving international city where it can be hard
            to find the Irish culture you came here to experience. In Galway you
            really feel like you’re in Ireland. The town itself has a wonderful
            vibe and there’s tons to see within a 90-minute drive.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
