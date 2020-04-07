import React, {useState} from 'react'
import {Modal, View, TextInput, Button, StyleSheet} from 'react-native'

const InputModal = (props) => {
    const [enteredTask, setEnteredTask] = useState('')

    const taskInputHandler = (e) => {
        setEnteredTask(e.nativeEvent.text);
    }

    const cancelHandler = () => {
        props.cancelHandler()
        setEnteredTask('')
    }

    const addHandler = () => {
        props.addTask(enteredTask)
        setEnteredTask('')
        props.cancelHandler()
    }

    return (
        <Modal animationType = 'slide' visible = {props.visibility}>
            <View style = {styles.modal_container}>
                <TextInput placeholder='Enter a new task' onChange={taskInputHandler} value={enteredTask} style={styles.task_input}/>
                <View style = {styles.button_group}>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={cancelHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal_container:{
        flexDirection:'column',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    task_input:{
        borderBottomColor:'black',
        borderStyle:'solid',
        borderWidth:1,
        width:'80%',
        height: 50,
        borderRadius:10,
        paddingHorizontal:20
    },
    button_group:{
        flexDirection:'row',
        width:'80%',
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-around'
    },
    button:{
        width:'30%',
    }
})

export default InputModal