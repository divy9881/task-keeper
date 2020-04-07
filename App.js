import React, {useState} from "react"
import {View, Button, FlatList, StyleSheet} from 'react-native'

import InputModal from './Components/InputModal'
import Task from './Components/Task'

const App = () => {
	const [visibilityMode, setVisibilityMode] = useState(false)
	const [tasks, setTasks] = useState([])
	const [idOfTask, incrementIdOfTask] = useState('0')

	const deleteTask = (key) => {
		setTasks((currentTasks) => currentTasks.filter((task) => key !== task.key))
	}

	const renderTask = (object) => {
        return <Task item = {object.item} deleteTask = {deleteTask}/>
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
			key:idOfTask
		}

		setTasks((currentTasks) => [...currentTasks, task])
		incrementIdOfTask((Number(idOfTask)+1).toString())
	}
	
	return (
		<View style={styles.app_contianer}>
			<InputModal visibility = {visibilityMode} cancelHandler = {cancelHandler} addTask={addTaskFunction}/>
			<View style={styles.add_button_view}>
				<Button title="ADD A TASK" onPress={addTaskHandler}/>
			</View>
			<View style={styles.task_list}>
				<FlatList data = {tasks} renderItem = {renderTask}/>
			</View>
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
	task_list:{
		width:'85%',
		marginTop:10
	}
})

export default App