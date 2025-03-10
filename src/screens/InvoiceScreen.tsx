import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import FormGeneralBill from "../components/FormGeneralBill";
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Boletas'>

export default function InvoiceScreen({ navigation, route } : Props) {

    return (
        <>
            <View>
                <Text>Ingresa la información de la Boleta</Text>
                <FormGeneralBill navigation={navigation} route={route}/>
            </View> 
        </>
    )

}