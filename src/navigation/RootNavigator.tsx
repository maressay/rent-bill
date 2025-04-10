import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import InvoiceScreen from "../screens/InvoiceScreen"
import TabsNavigator from "./TabsNavigator"
import CalculateElectricityFree from "../screens/CalculateElectricityScreen"
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
                <Stack.Screen name="Inicio" component={HomeScreen} />
                <Stack.Screen name="Boletas" component={InvoiceScreen}
                    options={
                        {
                            headerTitle: "Generar Boleta",
                            headerBackVisible: false
                        }
                    } />
                <Stack.Screen name="CalcularElectricidad" component={CalculateElectricityFree}
                    options={
                        {
                            headerTitle: "Calcular Electricidad",
                            animation: "ios_from_left"
                        }
                    } />
            </Stack.Navigator>
        </>
    )

}