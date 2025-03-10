import { useState } from "react";
import FormElectricityFee from "../components/FormElectricityFee";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { ElectricityForm } from "../types/forms";
import { PaperProvider } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList,'CalcularElectricidad'>

export default function CalculateElectricityFree({ navigation, route } : Props ) {

    return (
        <>
        <PaperProvider>
            <FormElectricityFee navigation={navigation} route={route} ></FormElectricityFee>
        </PaperProvider>
        </>
    )

}