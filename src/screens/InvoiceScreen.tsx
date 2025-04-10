import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import FormGeneralBill from "../components/FormGeneralBill";
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Boletas'>

export default function InvoiceScreen({ navigation, route }: Props) {
    return (
        <>
            <View>
                <Text style={styles.title}>Ingresar información de la "Boleta"</Text>
                <FormGeneralBill navigation={navigation} route={route} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "#003366",
        margin: 20,
        fontSize: 18,
        fontWeight: "bold"
    }
})