import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ElectricityForm } from "../types/forms";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Picker } from "@react-native-picker/picker";
import { Icon, TextInput } from "react-native-paper";
import ElectricityModal from "./ElectricityModal";

type Props = NativeStackScreenProps<RootStackParamList, 'CalcularElectricidad'>

export default function FormElectricityFee({ navigation, route }: Props) {

    const [visible, setVisible] = useState<boolean>(false)

    const [electricityFeeData, setElectricityFeeData] = useState<ElectricityForm>({
        electricityActualMonth: '',
        consumeActualMonth: '',
        electricityAgoMonth: '',
        consumeAgoMonth: '',
        kilowattConsume: '',
        kilowattPrice: '',
        priceElectricity: '',
    })

    const months = [
        { label: "Seleccionar mes", value: "" },
        { label: "Enero", value: "Enero" },
        { label: "Febrero", value: "Febrero" },
        { label: "Marzo", value: "Marzo" },
        { label: "Abril", value: "Abril" },
        { label: "Mayo", value: "Mayo" },
        { label: "Junio", value: "Junio" },
        { label: "Julio", value: "Julio" },
        { label: "Agosto", value: "Agosto" },
        { label: "Septiembre", value: "Septiembre" },
        { label: "Octubre", value: "Octubre" },
        { label: "Noviembre", value: "Noviembre" },
        { label: "Diciembre", value: "Diciembre" },
    ];

    const handleChange = (name: keyof ElectricityForm, value: string) => {
        setElectricityFeeData({
            ...electricityFeeData,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        setVisible(false)
        navigation.navigate('Boletas', {
            ...route.params,
            ...electricityFeeData,
        })
    }


    useEffect(() => {
        if (route.params) {
            const {
                electricityActualMonth,
                electricityAgoMonth,
                consumeActualMonth,
                consumeAgoMonth,
                kilowattConsume,
                kilowattPrice,
                priceElectricity,
            } = route.params;

            console.log(electricityActualMonth)

            const data: ElectricityForm = {
                electricityActualMonth: electricityActualMonth,
                electricityAgoMonth: electricityAgoMonth,
                consumeActualMonth: consumeActualMonth,
                consumeAgoMonth: consumeAgoMonth,
                kilowattConsume: kilowattConsume,
                kilowattPrice: kilowattPrice,
                priceElectricity: priceElectricity,
            }
            setElectricityFeeData(data);
        }
    }, [route.params]);


    useEffect(() => {
        if (electricityFeeData.consumeActualMonth && electricityFeeData.consumeAgoMonth) {

            const consumeActualMonth = electricityFeeData.consumeActualMonth
            const consumeAgoMonth = electricityFeeData.consumeAgoMonth

            try {
                let kilowattConsume = parseFloat((Number(consumeActualMonth) - Number(consumeAgoMonth)).toString()).toFixed(2)
                setElectricityFeeData(prevState => ({
                    ...prevState,
                    kilowattConsume
                }))
            } catch (e) {
                console.log(e)
            }
        } else {
            setElectricityFeeData(prevState => ({
                ...prevState,
                kilowattConsume: ''
            }))
        }

    }, [electricityFeeData.consumeActualMonth, electricityFeeData.consumeAgoMonth])

    useEffect(() => {
        if (electricityFeeData.kilowattConsume && electricityFeeData.kilowattPrice) {

            let kilowattPrice = electricityFeeData.kilowattPrice
            let kilowattConsume = electricityFeeData.kilowattConsume

            try {
                let priceElectricity = parseFloat((Number(kilowattPrice) * Number(kilowattConsume)).toString()).toFixed(2)
                setElectricityFeeData(prevState => ({
                    ...prevState,
                    priceElectricity
                }))
            } catch (e) {
                console.log(e)
            }
        } else {
            setElectricityFeeData(prevState => ({
                ...prevState,
                priceElectricity: ''
            }))
        }

    }, [electricityFeeData.kilowattConsume, electricityFeeData.kilowattPrice])


    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Calcular precio de la luz</Text>
                <Icon source={"lightbulb"} color="#0194fe" size={25}></Icon>
            </View>

            <ScrollView>
                <Text style={styles.label}>Seleccionar mes pasado</Text>
                <Picker
                    style={styles.input}
                    selectedValue={electricityFeeData.electricityActualMonth}
                    onValueChange={(itemValue) => {
                        handleChange('electricityAgoMonth', itemValue)
                    }}
                >
                    {
                        months.map((month) => (
                            <Picker.Item
                                key={month.value}
                                label={month.label}
                                value={month.value}
                            />
                        ))
                    }
                </Picker>
                <Text style={styles.label}>Consumo del mes pasado</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Consumo del mes pasado"
                    value={electricityFeeData.consumeAgoMonth}
                    onChangeText={(value) => handleChange('consumeAgoMonth', value)}
                />
                <Text style={styles.label}>Seleccionar mes actual</Text>
                <Picker
                    style={styles.input}
                    selectedValue={electricityFeeData.electricityAgoMonth}
                    onValueChange={(itemValue) => {
                        handleChange('electricityActualMonth', itemValue)
                    }}
                >
                    {
                        months.map((month) => (
                            <Picker.Item
                                key={month.value}
                                label={month.label}
                                value={month.value}
                            />
                        ))
                    }
                </Picker>
                <Text style={styles.label}>Consumo del mes actual</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Consumo del mes actual"
                    value={electricityFeeData.consumeActualMonth}
                    onChangeText={(value) => handleChange('consumeActualMonth', value)}
                />
                <Text style={styles.label}>Consumo de killowatts</Text>
                <TextInput
                    style={styles.input}
                    disabled={true}
                    keyboardType="numeric"
                    placeholder="Consumo total"
                    value={electricityFeeData.kilowattConsume}
                    onChangeText={(value) => handleChange('kilowattConsume', value)}
                />
                <Text style={styles.label}>Costo por killowatt</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Precio por killowatts"
                    value={electricityFeeData.kilowattPrice}
                    onChangeText={(value) => handleChange('kilowattPrice', value)}
                />
                <Text style={styles.label}>Costo Total</Text>
                <TextInput
                    style={styles.input}
                    disabled={true}
                    keyboardType="numeric"
                    placeholder="Costo Total"
                    value={electricityFeeData.priceElectricity}
                    onChangeText={(value) => handleChange('priceElectricity', value)}
                />

                <ElectricityModal visible={visible} onClose={() => setVisible(false)} onSubmit={() => handleSubmit()} data={electricityFeeData}></ElectricityModal>

                <Pressable
                    style={[styles.primaryButton, styles.lastElement]}
                    onPress={() => setVisible(true)}
                >
                    <Text style={styles.primaryButtonText}>Confirmar</Text>
                </Pressable>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderColor: "#CDDFED",
    },
    label: {
        marginHorizontal: 20,

    },
    primaryButton: {
        marginHorizontal: 20,
        backgroundColor: "#0194fe",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        alignItems: "center"
    },
    primaryButtonText: {
        color: "#fff",
        fontWeight: "bold"
    }, primaryText: {
        fontWeight: "bold",
        color: "#0194fe"
    },
    lastElement: {
        marginBottom: 10
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    title: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 30,
        color: "#0194fe"
    },
    icon: {
        marginLeft: 10
    }
})
