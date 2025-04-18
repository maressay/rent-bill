import { ElectricityForm, InvoiceForm, Invoice, ElectricityFeeDetail } from '../types/forms'
import { supabase } from './client'

export const createInvoice = async (invoiceForm: InvoiceForm, electricityForm: ElectricityForm) => {

    const invoice: Invoice = {
        lote: invoiceForm.lote,
        apartment_number: Number(invoiceForm.apartmentNumber),
        apartment_rent: Number(invoiceForm.apartmentRent),
        cable_fee: Number(invoiceForm.cableFee),
        cleaning_fee: Number(invoiceForm.cleaningFee),
        customer_name: invoiceForm.customerName,
        electricity_fee: Number(invoiceForm.electricityFee),
        internet_fee: Number(invoiceForm.internetFee),
        water_fee: Number(invoiceForm.waterFee)
    }


    const invoiceResult = await supabase.from('invoice').insert(invoice).select()

    if (invoiceResult.error) {
        console.log('Error inserting "invoice" data', invoiceResult.error)
        return 400
    }

    if (invoiceResult.data && invoiceResult.status == 201) {
        const { id } = invoiceResult.data[0] // id of invoice inserted

        const electricity_fee_detail: ElectricityFeeDetail = {
            fk_invoice: id,
            current_value: Number(electricityForm.consumeActualMonth),
            kwh_price: Number(electricityForm.kilowattPrice),
            last_value: Number(electricityForm.consumeAgoMonth),
            month: electricityForm.electricityActualMonth,
            month_ago: electricityForm.electricityAgoMonth
        }

        const electricityFeeResult = await supabase.from('electricity_fee_detail').insert(electricity_fee_detail);

        if (electricityFeeResult.status == 200) {
            return 200
        } else {
            console.log('Error inserting "electricity_fee_detail" data',electricityFeeResult.error)
            return 400
        }

    }

}

export const getAllLotes = async () => {
    console.log("Fetching all lotes")
    const lotesResult = await supabase.from('lote').select('*')

    if (lotesResult.error) {
        console.log('Error fetching "lote" data', lotesResult.error)
        return 400
    }

    if (lotesResult.data && lotesResult.status == 200) {
        console.log(lotesResult.data)
        return lotesResult.data
    }


}