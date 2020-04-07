import React, {useState} from "react"
import {View, Button, FlatList, StyleSheet} from 'react-native'

import InputModal from './Components/InputModal'
import Task from './Components/Task'

const App = () => {
	const [visibilityMode, setVisibilityMode] = useState(false)
	const [tasks, addTask] = useState([])
	const [numOfTask, incrementNumOfTasks] = useState('0')

	const renderTask = (object) => {
        return <Task task = {object.item.task}/>
    }

	const addTaskHandler = () => {
		setVisibilityMode(true)
	}

	const cancelHandler = () => {
		setVisibilityMode(false)
	}

	const addTaskFunction = (taskText) => {
		const task = {
			task:taskText,
			key:numOfTask
		}

		addTask((currentTasks) => [...currentTasks, task])
		incrementNumOfTasks((Number(numOfTask)+1).toString())
	}
	
	return (
		<View style={styles.app_contianer}>
			<InputModal visibility = {visibilityMode} cancelHandler = {cancelHandler} addTask={addTaskFunction}/>
			<View style={styles.add_button_view}>
				<Button title="ADD A TASK" style={styles.add_task_button} onPress={addTaskHandler}/>
			</View>
			<FlatList data = {tasks} renderItem = {renderTask}/>
		</View>
	)
}

const styles = StyleSheet.create({
	app_contianer : {
		marginTop: 35,
		flexDirection:'column',
		alignItems:'center'
	},
	add_button_view:{
		width:'60%'
	},
	add_task_button:{
	}
})

export default App