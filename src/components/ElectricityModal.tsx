import { Pressable, StyleSheet, Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import CustomButton from "./CustomButton";
import { ElectricityForm } from "../types/forms";
import { useEffect } from "react";
import ElectricityCalculeDetail from "./CalculateElectricityDetail";

type Props = {
   visible: boolean;
   onClose: () => void;
   onSubmit: () => void;
   data: ElectricityForm;
}

export default function ElectricityModal({ visible, onClose, onSubmit, data } : Props ) {

    useEffect(() => console.log(data),[data])

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
                    <Text style={styles.title}>Detalle del Calculo</Text>
                        <ElectricityCalculeDetail data={data}/>
                    <View>
                        <CustomButton
                            content="Aceptar"
                            onPress={onSubmit}
                        />
                        <CustomButton
                            content="Cancelar"
                            onPress={onClose}
                        />
                    </View>
                </Modal>
            </Portal>
        </>
    )

}


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#123",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    }
})