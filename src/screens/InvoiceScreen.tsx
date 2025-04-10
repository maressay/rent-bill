import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon, TextInput } from "react-native-paper";
import FormGeneralBill from "../components/InvoiceForm";
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Boletas'>

export default function InvoiceScreen({ navigation, route }: Props) {
    return (
        <>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Generar Boleta</Text>
                    <Icon source={"receipt"} color="#0194fe" size={25}></Icon>
                </View>
                <FormGeneralBill navigation={navigation} route={route} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    title: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 30,
        color: "#0194fe"
    },

})