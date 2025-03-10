import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import InvoiceScreen from "../screens/InvoiceScreen"
import TabsNavigator from "./TabsNavigator"
import CalculateElectricityFree from "../screens/CalculateElectricityFee"
import { RootStackParamList } from "./types"


const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {

    return (
        <>
        <Stack.Navigator>
            <Stack.Screen
                name="MainTabs"
                component={TabsNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name = "Inicio" component={HomeScreen} />
            <Stack.Screen name = "Boletas" component={InvoiceScreen}/>
            <Stack.Screen name = "CalcularElectricidad" component={CalculateElectricityFree}/>
        </Stack.Navigator>
        </>
    )

}