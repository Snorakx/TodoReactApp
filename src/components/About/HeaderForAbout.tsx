import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';



const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;






const styles = StyleSheet.create({
    header: {
        backgroundColor: '#8db88f'
    },
    headerTxt: {
        color: 'black',
        fontSize: 0.07 * wW,
        textAlign: "center",
        marginTop: Constants.statusBarHeight + 0.1 * wW,
        width: 0.5 * wW,
        marginLeft: (wW / 2) - (0.5 * wW) / 2



    }

});






interface IHeaderAboutforProps { }

const HeaderforAbout: FC<IHeaderAboutforProps> = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTxt}>Best places to visit in Europe</Text>
        </View>
    );
};

export default HeaderforAbout;