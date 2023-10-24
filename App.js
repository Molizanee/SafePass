import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import CreateNewPassword from "./pages/CreateNewPassword";
import CreateAccount from "./pages/CreateAccount";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2B2B2B",
          borderColor: "#2B2B2B",
          activeTintColor: "#0075FF",
        },
        tabBarLabelStyle: {
          marginBottom: 13,
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Contas" component={Accounts} />
      <Tab.Screen name="Perfil" component={Profile} />
      <Tab.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{ tabBarButton: () => null }} // This hides the tab
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
