import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomePage from "./home/HomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticlePage } from "./home/ArticlePage";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ArticlePage"
          component={ArticlePage}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();


const AppTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons 
              name="newspaper"
              size={25}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;

