import React, { FC, useState } from 'react';
import { Text, Button, View, ScrollView, StyleSheet, TouchableOpacity, ColorPropType } from 'react-native'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../reducers'
import { ITodoListReducer } from '../../reducers/todoListReducer'
import Constants from 'expo-constants';
import { ISingleElementList } from '../../entities/todoSingleEl'
import { deleteElemTodoList } from '../../actions/todoListActions';
import { Dimensions } from 'react-native';

const wW = Dimensions.get('window').width;
const hW = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    wrapper: {
        marginTop: Constants.statusBarHeight
    },
    addbtn: {
        backgroundColor: '#97ccb8',
        marginBottom: 0.1 * hW,
        height: 0.05 * hW,
        borderRadius: wW
    },
    textaddbtn: {
        textAlign: "center",
        fontSize: 0.07 * wW
    },
    singleElList: {
        marginTop: 0.05 * hW,
        backgroundColor: '#8db88f'
    },
    titleTxt: {
        textAlign: "center",
        marginBottom: 0.02 * hW,
        fontSize: 0.06 * wW,

    },
    holder: {
        position: "absolute",
        fontSize: 0.08 * wW,
        marginLeft: 0.03 * wW

    },

});
const Titletxt = styled.Text`
    text-align: center;
    margin-bottom: 2%;
    font-size:20px;

`;
const Descriptiontxt = styled.Text`
    text-align: center;
    margin-bottom: 2%;
`;


type DelNewElemTodoList = ReturnType<typeof deleteElemTodoList>;



const TodoList: FC<{ switchView(formView: boolean) }> = props => {





    const dispatch = useDispatch();
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true)
    }
    const deleteMe = (index: number) => {
        dispatch<DelNewElemTodoList>(deleteElemTodoList(index))

    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.addbtn} onPress={goToForm}><Text style={styles.textaddbtn}>Dodaj</Text></TouchableOpacity>
                {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                    <View style={styles.singleElList} key={index}>
                        <TouchableOpacity onPress={() => deleteMe(index)}>
                            <Text style={styles.holder}>@</Text>
                            <Text style={styles.titleTxt}>
                                {elem.name}
                            </Text>
                            <Descriptiontxt>
                                {elem.description}
                            </Descriptiontxt>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>


    )
};

export default TodoList;