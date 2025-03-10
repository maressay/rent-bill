import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import InvoiceScreen from "../screens/InvoiceScreen"
import { RootStackParamList } from "./types"

const Tab = createBottomTabNavigator<RootStackParamList>()

export default function TabsNavigator() {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={HomeScreen} options={{ title: 'Inicio' }} />
                <Tab.Screen name="Boletas" component={InvoiceScreen} options={{ title: 'Boletas' }} />
            </Tab.Navigator>
        </>
    )
}