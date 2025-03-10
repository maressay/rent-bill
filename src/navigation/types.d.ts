import { ElectricityForm, InvoiceForm } from "../types/forms";

export type RootStackParamList = {
    MainTabs: undefined;
    Inicio: undefined;
    Boletas: ElectricityForm & InvoiceForm;
    CalcularElectricidad: ElectricityForm & InvoiceForm;
}
