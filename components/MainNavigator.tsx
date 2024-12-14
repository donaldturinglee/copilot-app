import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "@/screens/ChatScreen";
import ImageScreen from "@/screens/ImageScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { Entypo } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header } from "@/components/Header";

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} options={
                {
                    tabBarIcon: ({ color, size}) => {
                        return <Entypo name="chat" size={size} color={color} />;
                    },
                    header: () => null,
                }
            } />
            <Tab.Screen name="Image" component={ImageScreen} options={
                {
                    tabBarIcon: ({ color, size}) => {
                        return <Entypo name="image" size={size} color={color} />;
                    },
                    header: () => null,
                }
            } />
            <Tab.Screen name="Settings" component={SettingsScreen} options={
                {
                    tabBarIcon: ({ color, size}) => {
                        return <Ionicons name="settings-outline" size={size} color={color} />;
                    },
                    header: () => null,
                }
            } />
        </Tab.Navigator>
    );
}