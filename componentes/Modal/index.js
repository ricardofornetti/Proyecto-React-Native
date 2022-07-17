import { Modal, Text, View, Button, StyleSheet, TouchableOpacity } from "react-native"

export default function CustomModal(props) {
    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props


  return (
    <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.modal}>
            <View style={styles.modalView}>
                <View style={styles.modalTitle}>
                    <Text>Mi Modal</Text>
                </View>
                <View style={styles.modalMessage}>
                    <Text style={styles.modalMessage}>¿Seguro que desea eliminar? </Text>
                </View>
                <View style={styles.modalMessage}>
                    <Text style={styles.modalItem}>{itemSelected.value}</Text>
                </View>
                <View style={styles.modalButton}>
                    <TouchableOpacity
                        style={styles.buttonConfirm}
                        onPress={() =>onHandlerDeleteItem(itemSelected.id)}
                    >
                        <Text style={styles.texto}>Eliminar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonConfirm}
                        onPress={() => onHandlerCompleteItem(itemSelected.id)}
                    >
                        <Text style={styles.texto}>Completar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
)
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
        
        },  
        modalView: {
        backgroundColor: 'white',
        width: '80%',
        height: '50%',
        borderRadius: 10,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        },
        modalTitle: {
        backgroundColor: '#ccc',
        color: 'white',
        fontSize: 18,
        fontFamily:'PTSansNarrowRegular'
        },
        modalMessage: {
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            textTransform:'uppercase',   
        },
        modalButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
        },
        buttonConfirm:{
            backgroundColor:'red',
            marginLeft: 10,
            borderRadius:10,
            padding: 15,
            fontFamily:'PTSansNarrowRegular',
        },
        texto:{
            color: 'white',
        },
        modalItem: {
        fontSize: 30
        }
})