import React, { FC, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../../reducers";
import { ITodoListReducer } from "../../reducers/todoListReducer";
import Constants from "expo-constants";
import { ISingleElementList } from "../../entities/todoSingleEl";
import { deleteElemTodoList } from "../../actions/todoListActions";
import { Dimensions } from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

const wW = Dimensions.get("window").width;
const hW = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  wrapper: {
    marginTop: Constants.statusBarHeight,
  },

  textaddbtn: {
    textAlign: "center",
    fontSize: 0.07 * wW,
  },
  singleElList: {
    marginTop: 0.05 * hW,
    backgroundColor: "#8db88f50",
    height: 0.1 * hW,
    width: wW * 1.3,
  },
  txt: {
    width: 0.7 * wW,
    marginLeft: wW / 2 - (0.7 * wW) / 2,
  },
  titleTxt: {
    textAlign: "center",
    marginBottom: 0.02 * hW,
    fontSize: 0.06 * wW,
  },
  descriptionTxt: {
    textAlign: "center",
    marginBottom: 0.02 * wW,
  },
  holder: {
    position: "absolute",
    fontSize: 0.08 * wW,
    marginLeft: 0.03 * wW,
  },
  delete: {
    fontSize: 40,
    marginTop: 10,
    marginLeft: 0.1 * wW,
  },
  options: {
    position: "absolute",
    left: wW / 1.1,
    fontSize: 40,
    marginTop: 10,
    color: "gray",
  },
  optionbox: {
    backgroundColor: "gray",
    position: "absolute",
    right: 0,
    height: "100%",
    width: 0.3 * wW,
  },
  AddBtnBox: {
    position: "absolute",
    width: 0.14 * wW,
    height: 0.14 * wW,
    right: 0.05 * wW,
    marginTop: 0.8 * hW,
  },
  addbtn: {
    fontSize: wW * 0.14,
    color: "#8db88f",
    marginTop: -0.003 * wW,
  },
});

type DelNewElemTodoList = ReturnType<typeof deleteElemTodoList>;

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.todoList
  );
  const goToForm = () => {
    props.switchView(true);
  };
  const deleteMe = (index: number) => {
    dispatch<DelNewElemTodoList>(deleteElemTodoList(index));
    console.log(todoListState.todoList);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {todoListState.todoList.map(
          (elem: ISingleElementList, index: number) => (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              key={index}
            >
              <View style={styles.singleElList} key={index}>
                <View style={styles.optionbox}>
                  <MaterialIcons
                    name="delete-forever"
                    onPress={() => {
                      deleteMe(index);
                    }}
                    style={styles.delete}
                  />
                </View>
                <Entypo name="chevron-thin-left" style={styles.options} />
                <View style={styles.txt}>
                  <Text style={styles.titleTxt}>{elem.name}</Text>
                  <Text style={styles.descriptionTxt}>{elem.description}</Text>
                </View>
              </View>
            </ScrollView>
          )
        )}
      </ScrollView>
      <View style={styles.AddBtnBox}>
        <Entypo
          name="circle-with-plus"
          style={styles.addbtn}
          onPress={goToForm}
        />
      </View>
    </View>
  );
};

export default TodoList;
