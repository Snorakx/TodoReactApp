import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    avatar: {
        marginTop: '8%',
        marginLeft: (windowWidth / 2) - 100,
        width: 200,
        height: 200,
        borderRadius: 400 / 2
    },
    avatar1: {
        marginTop: '8%',
        marginLeft: (windowWidth / 2) - 100,
        marginRight: (windowWidth / 2) - 100,
        width: 200,
        height: 200,
        borderRadius: 400 / 2
    },
    monainfo: {
        color: 'white',
        fontSize: 20,
    },
    monaInfoBox: {

        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: '5%',
        marginBottom: 1

    },
});






interface IAvatarProps { }

const Avatar: FC<IAvatarProps> = (props) => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Image source={require('../assets/avatar.png')} style={styles.avatar} />
                <Image source={require('../assets/avatar1.png')} style={styles.avatar1} />
            </ScrollView>
        </View>
    );
};

export default Avatar;