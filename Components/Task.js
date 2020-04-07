import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) => {

    const taskHandler = () => {
        props.deleteTask(props.item.key)
    }

    return (
        <TouchableOpacity onPress={taskHandler}>
            <View style={styles.task}>
                <Text>{props.item.task}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    task:{
        backgroundColor:'#b2b7bf',
        padding:10,
        margin:10,
        borderWidth:3,
        borderColor:'black',
        borderStyle:'solid',
        borderRadius:5
    }
})

export default Task