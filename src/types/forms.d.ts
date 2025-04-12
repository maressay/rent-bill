export type InvoiceForm = {
    lote: string;
    apartmentNumber: string;
    customerName: string;
    apartmentRent: string;
    waterFee: string;
    electricityFee: string;
    cableFee: string;
    internetFee: string;
    cleaningFee: string;
}

export type ElectricityForm = {
    electricityAgoMonth: string;
    consumeAgoMonth: string;
    electricityActualMonth: string;
    consumeActualMonth: string;
    kilowattConsume: string;
    kilowattPrice: string;
    priceElectricity: string;
}

export type Invoice = {
    customer_name?: string | null;
    lote: string;
    apartment_number?: number | null;
    apartment_rent?: number | null;
    water_fee?: number | null;
    electricity_fee?: number | null;
    cable_fee?: number | null;
    internet_fee?: number | null;
    cleaning_fee?: number | null;
};


