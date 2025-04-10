import { DataTable } from "react-native-paper";
import { ElectricityForm } from "../types/forms";
import { StyleSheet, Text } from "react-native";

type Props = {
    data: ElectricityForm;
}

export default function ElectricityCalculeDetail( { data } : Props) {

    return (
        <>
            <DataTable style={styles.tableContainer}>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell_1}>
                        <Text style={styles.text}>
                            Luz de {data.electricityActualMonth}
                        </Text>
                        </DataTable.Cell>
                    <DataTable.Cell style={styles.cell_2}>
                        <Text>
                            {data.consumeActualMonth} Kilowatts -
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell_1}>
                        <Text style={styles.text}>
                            Luz de {data.electricityAgoMonth}
                        </Text>
                        </DataTable.Cell>
                    <DataTable.Cell style={styles.cell_2}>
                        <Text>
                            {data.consumeAgoMonth} Kilowatts
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell_1}>
                        <Text style={styles.text}>
                            Consumo total
                        </Text>
                        </DataTable.Cell>
                    <DataTable.Cell style={styles.cell_2}>
                        <Text>
                            {data.kilowattConsume} Kilowatts
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell_1}>
                        <Text style={styles.text}>
                            Precio por killowat
                        </Text>
                        </DataTable.Cell>
                    <DataTable.Cell style={styles.cell_2}>
                        <Text>
                            S/.{data.kilowattPrice}
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={styles.cell_1}>
                        <Text style={styles.text}>
                            Total
                        </Text>
                        </DataTable.Cell>
                    <DataTable.Cell style={styles.cell_2}>
                        <Text>
                            S/.{data.priceElectricity}
                        </Text>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    )

}

const styles = StyleSheet.create({
    tableContainer: {
        marginVertical: 10,
    },
    row: {
        marginHorizontal: 15,
        borderBottomWidth: 2,
        borderColor: "#0194fe"
    },
    cell_1: {
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    cell_2: {
        justifyContent: 'flex-start'
    },
    text: {
        fontWeight: "bold"
    }
})