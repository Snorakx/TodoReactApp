import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',

    },
    monainfo: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        margin: 20

    },
    monaInfoBox: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
    }
});






interface IInfoProps { }

const Info: FC<IInfoProps> = () => {

    return (
        <View style={styles.monaInfoBox}>
            <Text style={styles.monainfo}>1507</Text>
            <Text style={styles.monainfo}>Mona Lisa</Text>
            <Text style={styles.monainfo}>Luwr</Text>
        </View>
    );
};

export default Info;