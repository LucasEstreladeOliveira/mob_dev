import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Home from '../Screen/Home'
import Settings from '../Screen/Settings'


const Tab = createBottomTabNavigator();

export default _ => {

    const styles = StyleSheet.create({
        justifyCenter: {
            justifyContent: 'center'
        }
    })

    return (
        <Tab.Navigator style={styles.justifyCenter} tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#A6ACCD',
            activeBackgroundColor: '#717CB470',
            inactiveBackgroundColor: '#292D3E',
            tabStyle: { justifyContent: 'center'}
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home'
            }} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}