import { Pressable, Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {

    return (
        <>
            <View>
                <Text>Bienvenido a RentBill</Text>
                <Pressable onPress={() => navigation.navigate('Boletas')}>
                    <Text>Crear Boleta</Text>
                </Pressable>
            </View>
        </>
    )

}