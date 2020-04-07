import React from 'react'
import {View, Text} from 'react-native'

const Task = (props) => {
    return (
        <View>
            <Text>{props.task}</Text>
        </View>
    )
}

export default Task