import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { ElectricityForm, InvoiceForm } from "../types/forms";
import { RootStackParamList } from "../navigation/types";
import { Picker } from "@react-native-picker/picker";
import { generateBillPDFHtml } from "../util/Bill";

// Generate pdf

import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'

type Props = NativeStackScreenProps<RootStackParamList,'Boletas'>

type Lotes = {
    label: string;
    value: string;
}

export default function FormGeneralBill({ navigation, route } : Props) {

    const [selectedLotes, setSelectedLotes] = useState<string>('')
    const [selectedApartment, setSelectedApartment] = useState<string>('')

    const lotes: Lotes[] = [
        { label: 'Selecciona un lote', value: ''},
        { label: 'D17', value: 'D17' },
        { label: 'A17', value : 'A17' },
    ]

    const apartmentsNumbers: Lotes[] = 
        selectedLotes === '' ? [ { label: 'Seleccionar primero un lote', value: '' }] : 
        selectedLotes === 'D17' ? [
            { label: 'Seleciona un número de departamento', value: '' },
            { label: 'D17 303', value: '303' }
        ] : 
        selectedLotes === 'A17' ? [
            { label: 'Seleciona un número de departamento', value: '' },
            { label: 'A17 203', value: '203' }
        ] : [];


    const [formData, setFormData] = useState<InvoiceForm>({
        lote: '',
        apartmentNumber: '',
        customerName: '',
        apartmentRent: '',
        waterFee: '',
        electricityFee: '',
        cableFee: '',
        internetFee: '',
        cleaningFee: '',
    })

    const [electricityFeeData, setElectricityFeeData] = useState<ElectricityForm>({
        electricityActualMonth: '',
        consumeActualMonth: '',
        electricityAgoMonth: '',
        consumeAgoMonth: '',
        kilowattConsume: '',
        kilowattPrice: '',
        priceElectricity:'',
    })

    const handleChange = (name: keyof InvoiceForm, value: string) => {
        setFormData({
            ...formData,
            [name] : value,
        })
    }

    const handleSubmit = async () => {

        if (!formData) {
            return console.log('FormDataVacio')
        } 

        console.log('FormData', formData)
        console.log('ElectricityForm', electricityFeeData)

        // save data
        // generatePDF for sharing
        const htmlContent = generateBillPDFHtml(formData, electricityFeeData)
        
        try {
            const file = await printToFileAsync({
                html: htmlContent,
                base64: false
            })

            await shareAsync(file.uri)
        } catch (err) {
            console.log(err)
            alert("Hubo un error al crear el archivo PDF, pero este si se registro, dirigase al historial de facturas del cuarto para volver a generarlo (incoming...)")
        }



    }

    useEffect(() => {
        if (route.params) {
            const {
                electricityActualMonth,
                consumeActualMonth,
                electricityAgoMonth,
                consumeAgoMonth,
                kilowattConsume,
                kilowattPrice,
                priceElectricity,
                ...res
            } = route.params;

            setFormData(prevState => ({
                ...prevState,
                ...res,
                electricityFee: priceElectricity,
            }));

            setElectricityFeeData({
                electricityActualMonth: electricityActualMonth,
                consumeActualMonth: consumeActualMonth,
                electricityAgoMonth: electricityAgoMonth,
                consumeAgoMonth: consumeAgoMonth,
                kilowattConsume: kilowattConsume,
                kilowattPrice: kilowattPrice,
                priceElectricity: priceElectricity
            });

            console.log('PROSP FORMDATA GENERAL', formData)
            console.log('PROPS ELECTRICITY GENERAL',electricityFeeData)
        }
    }, [route.params])

    return (
        <>
            <Text>General Form Data</Text>
            <Text>Seleccionar Lote</Text>
            <Picker
                selectedValue={selectedLotes}
                onValueChange={(itemValue) => {
                    setSelectedLotes(itemValue)
                    handleChange('lote', itemValue)
                }}
            >
                {
                    lotes.map((lote) => (
                        <Picker.Item
                            key={lote.value}
                            label={lote.label}
                            value={lote.value}
                        />
                    ))
                }
            </Picker>
            <Text>Seleccionar número del apartamento</Text>
            <Picker
                selectedValue={selectedApartment}
                onValueChange={(itemValue) => {
                    handleChange('apartmentNumber', itemValue)
                }}
            >
                {
                    apartmentsNumbers.map((apartment) => (
                        <Picker.Item
                            key={apartment.value}
                            label={apartment.label}
                            value={apartment.value}
                        />
                    ))
                }
            </Picker>
            <View>
                <Text>Ingresar nombre completo</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Nombre Completo"
                    value={formData.customerName}
                    onChangeText={(value) => handleChange('customerName', value)}
                />
                <Text>Ingresar renta del departamento</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Departamento"
                    value={formData.apartmentRent}
                    onChangeText={(value) => handleChange('apartmentRent', value)}
                />
                <Text>Ingresar costo del agua</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Agua"
                    value={formData.waterFee}
                    onChangeText={(value) => handleChange('waterFee', value)}
                />
                <Text>Ingresar costo por el cable</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Cable"
                    value={formData.cableFee}
                    onChangeText={(value) => handleChange('cableFee', value)}
                />
                <Text>Ingresar costo de la limpieza</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Limpieza"
                    value={formData.cleaningFee}
                    onChangeText={(value) => handleChange('cleaningFee', value)}
                />

                <Pressable
                    onPress={() => {
                        navigation.navigate('CalcularElectricidad', {
                            ...formData,
                            ...electricityFeeData,
                        })
                    }}
                >
                    <Text>Calcular costo por la electricidad</Text>
                </Pressable>

                <TextInput
                    disabled={true}
                    keyboardType="numeric"
                    placeholder="Electricidad"
                    value={formData.electricityFee}
                    onChangeText={(value) => handleChange('electricityFee', value)}
                />

                <Pressable onPress={handleSubmit}><Text>Crear Boleta</Text></Pressable>
            </View>
        </>
    )

}