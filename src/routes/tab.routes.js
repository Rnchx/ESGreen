import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../screens/Home";
import Feedback from "../screens/Feedback";
import Register from "../screens/Register";
import Donation from "../screens/Donation";
import Users from "../screens/Users";
import { mockedUsers } from "../components/data/users/data";

const Tab = createBottomTabNavigator();

export default TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Users"
        component={Users}
        initialParams={{ mockedUsers }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Usuários",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />

      <Tab.Screen
        name="Register"
        component={Register}
        initialParams={{ user: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#DC143C",
          tabBarInactiveTintColor: "#202020",
        }}
      />

      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="hand-holding-heart"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Doações",

          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="email-send"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Doações",

          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

    </Tab.Navigator>
  );
};