import { ElectricityForm, InvoiceForm } from "../types/forms"

export const generateBillPDFHtml = ( invoice : InvoiceForm, electricity : ElectricityForm) => {

    const {
        apartmentNumber,
        apartmentRent,
        cableFee,
        cleaningFee,
        customerName,
        electricityFee,
        internetFee,
        lote,
        waterFee
    } = invoice

    const total = Number(apartmentRent) + Number(cableFee) + Number(cleaningFee) + Number(electricityFee) + Number(internetFee) + Number(waterFee)

    const {
        consumeActualMonth,
        consumeAgoMonth,
        electricityActualMonth,
        electricityAgoMonth,
        kilowattConsume,
        kilowattPrice,
        priceElectricity
    } = electricity

    const actualDate = new Date()
    const actualDateFormat = actualDate.toISOString().split('T')[0] 

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Helvetica;
        }

        section {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #F4F0ED;

        }

        .container {
            background-color: #FFFFFF;
            padding: 2rem;
            margin-bottom: 5rem;
            border-radius: 10px;
            height: 80vh;
        }

        .principal-title {
            text-align: center;
        }

        .subtitle {
            width: 600px;
            margin: 10px auto;
            text-align: right;
            font-weight: bold;
        }

        .info-container {
            width: 600px;
            margin: 10px auto;
        }

        .payment-info {
            width: 600px;
            margin: 10px auto;
        }

        .payment-info thead {
            background-color: #CDDFED;
        }

        .payment-info thead th {
            padding: 3px 15px;
        }

        .payment-info .cell-total {
            background-color: #CDDFED;
            text-align: center;
            font-weight: bold;
        }

        .payment-info .cell-center {
            text-align: center;
        }
    </style>

    <body>
        <section>
            <div class="container">
                <h1 class="principal-title">Detalle del Recibo #1234</h1>
                <div class="info-container">
                    <p>De: <span>${customerName}</span></p>
                    <p>Lote: <span>${lote}</span>
                    <p>Número del Departamento: <span>${apartmentNumber}</span></p>
                    <p>Mes: <span>${electricityActualMonth}</span></p>
                    <p>Fecha: <span>${actualDateFormat}</span></p>
                </div>
                <table class="payment-info">
                    <thead>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Renta del departamento</td>
                            <td class="cell-center">S/.${apartmentRent}</td>
                        </tr>
                        <tr>
                            <td>Agua</td>
                            <td class="cell-center">S/.${waterFee}</td>
                        </tr>
                        <tr>
                            <td>Luz</td>
                            <td class="cell-center">S/.${electricityFee}</td>
                        </tr>
                        <tr>
                            <td>Limpieza</td>
                            <td class="cell-center">S/.${cleaningFee}</td>
                        </tr>
                        <tr class="cell-total">
                            <td>Total</td>
                            <td>S/.${total}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="subtitle">Detalle del calculo de la luz</p>
                <table class="payment-info">
                    <thead>
                        <th>Mes</th>
                        <th>Valor</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${electricityActualMonth}</td>
                            <td class="cell-center">${consumeActualMonth} kW</td>
                        </tr>
                        <tr>
                            <td>${electricityAgoMonth}</td>
                            <td class="cell-center">${consumeAgoMonth} kW</td>
                        </tr>
                        <tr>
                            <td>Diferencia</td>
                            <td class="cell-center">${kilowattConsume} kW</td>
                        </tr>
                        <tr>
                            <td>Precio x Killowat</td>
                            <td class="cell-center">S/.${kilowattPrice}</td>
                        </tr>
                        <tr class="cell-total">
                            <td>Total</td>
                            <td>S/.${priceElectricity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </body>

    </html>
    `

} 