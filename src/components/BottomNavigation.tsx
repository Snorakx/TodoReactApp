import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoListScreen from '../screens/TodoList';
// import Form from '../screens/Form';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'grey',
                inactiveTintColor: 'white',
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: '#97ccb8',
                },
            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            {/* <Tab.Screen
                name="Form"
                component={Form}
                options={{
                    tabBarLabel: 'Form',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomTabs;