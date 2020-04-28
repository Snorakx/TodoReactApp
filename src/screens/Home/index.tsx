import React, { FC } from 'react';
import { Button, View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';




const CustomImage = styled.Image`
margin-top: 20%;
margin-left:5%;
width:50%;
height:30%;
`;
const CustomImage2 = styled.Image`
margin-top: 12%;
margin-left:5%;
width:90%;
height:30%;
`;
const CustomImage3 = styled.Image`
position:absolute;
margin-top: 15%;
width:100%;
height:100%;
`;
const CustomText = styled.Text`
position:absolute;
top:17%;
right:5%;
text-align:justify;
width:35%;
color:#6dcfaa;
`;
const CustomText2 = styled.Text`
position:absolute;
bottom:0;
text-align:justify;
width:90%;
color:#25805d;
right:5%;
`;





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
});
const ButtonView = styled.View`
background-color:white;
top:4%;
`;





interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <ButtonView>
                <Button title="Add todo" color='black' onPress={() => {
                    navigation.navigate('TodoList'),
                        console.log('halko tu jestem');
                }}
                />
            </ButtonView>

            <CustomImage3 source={require('../../assets/bg.png')} resizeMode='repeat' />
            <CustomImage source={require('../../assets/gif.gif')} />
            <CustomText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </CustomText>
            <CustomImage2 source={require('../../assets/laugh.png')} />
            <CustomText2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </CustomText2>


        </View>
    );
};

export default Home;