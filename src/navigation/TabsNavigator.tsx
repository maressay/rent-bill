import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import InvoiceScreen from "../screens/InvoiceScreen"
import { RootStackParamList } from "./types"
import { Ionicons } from 'react-native-vector-icons'


const Tab = createBottomTabNavigator<RootStackParamList>()

export default function TabsNavigator() {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={HomeScreen}
                    options={{
                        title: 'Inicio',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size}></Ionicons>
                        )
                    }}
                />
                <Tab.Screen name="Boletas" component={InvoiceScreen}
                    options={{
                        title: 'Boletas',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="document" color={color} size={size}></Ionicons>
                        )    
                    }} />
            </Tab.Navigator>
        </>
    )
}