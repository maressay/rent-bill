import { StyleSheet } from "react-native";
import { ElectricityForm, InvoiceForm } from "../types/forms";

export type RootStackParamList = {
    MainTabs: undefined;
    Inicio: undefined;
    Boletas: ElectricityForm & InvoiceForm & StyleSheet;
    CalcularElectricidad: ElectricityForm & InvoiceForm;
}
