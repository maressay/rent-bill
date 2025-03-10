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