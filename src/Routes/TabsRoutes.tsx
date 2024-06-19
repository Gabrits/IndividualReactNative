import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { styles } from '../Routes/style'
import { Home } from '../Pages/Home';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { Login } from '../Pages/Login';

export type RootTabParamsList ={
    TabInicio: { name: string };
    TabNotificacoes: { name: string};
    TabVoce: { name: string };
}

const Tab = createBottomTabNavigator<RootTabParamsList>();

function TabsRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#313338',
                height: 55,
            },
            
            headerStyle: {
                backgroundColor: '#ddd'
            }
        }}
        >
        <Tab.Screen
        name='TabInicio'
        component={Home}
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabItem}>
              <Icon name="home" size={focused ? 25 : 20} color={focused ? "#FFFFFF" : "#DBDEE1"} />
              <Text style={[styles.tabText, { color: focused ? "#FFFFFF" : "#DBDEE1" }]}>Início</Text>
            </View>
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
        />

        <Tab.Screen
        name='TabNotificacoes'
        component={Home}
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabItem}>
              <Icon name="notifications" size={focused ? 25 : 20} color={focused ? "#FFFFFF" : "#DBDEE1"} />
              <Text style={[styles.tabText, { color: focused ? "#FFFFFF" : "#DBDEE1" }]}>Notificações</Text>
            </View>
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
        />

        <Tab.Screen
        name='TabVoce'
        component={Home}
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabItem}>
              <Icon name="happy" size={focused ? 25 : 20} color={focused ? "#FFFFFF" : "#DBDEE1"} />
              <Text style={[styles.tabText, { color: focused ? "#FFFFFF" : "#DBDEE1" }]}>Você</Text>
            </View>
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
        />
    
    </Tab.Navigator>
  )
}

export default TabsRoutes