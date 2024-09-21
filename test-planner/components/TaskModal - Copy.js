// components/TaskModal.js
import React from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    ScrollView
} from 'react-native';
import {TextInput} from 'react-native';
import styles from './Styles';
import DatePicker from 'react-native-modern-datepicker';
import TimePicker from './TimePicker';

const TaskModal = ({
    modalVisible,
    task,
    setTask,
    handleAddTask,
    handleCancel,
    validationError,
}) => {
    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={false}>
            
            {/* Container for the modal */}
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={task.title}
                    onChangeText={(text) =>
                        setTask({ ...task, title: text })
                    }/>
                    
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={task.description}
                    onChangeText={(text) =>
                        setTask({
                            ...task,
                            description: text,
                        })
                    }/>
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={task.location}
                    onChangeText={(text) =>
                        setTask({
                            ...task,
                            location: text,
                        })
                    }/>
                    
                <Text style={styles.inputLabel}>
                    Deadline:
                </Text>
                <TimePicker/>
                <DatePicker
                    style={styles.datePicker}
                    mode="date"
                    selected={task.deadline}
                    onDateChange={(date) =>
                        setTask({ ...task, deadline: date })
                    }/>              
                {validationError && (
                    <Text style={styles.errorText}>
                        Please fill in all fields correctly.
                    </Text>
                )}
                <Button
                
                    // Display "Update" when editing an existing 
                    // task, "Add" when adding a new task
                    title={task.id ? "Update" : "Add"}
                    // Call the handleAddTask function 
                    // when the button is pressed
                    onPress={handleAddTask}
                    // Set the button color
                    color="#282828"/>
                    
                <Button
                    title="Cancel"
                    onPress={handleCancel}
                    color="#C13636"/>
            </View>
        </Modal>
    );
};

export default TaskModal;