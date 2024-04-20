import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Take out trash', points: '5', completed: false },
    { id: 2, task: 'Wash clothes', points: '10', completed: false },
    { id: 3, task: 'Time to wax the beard', points: '700', completed: false },
  ]);
  const [coins, setCoins] = useState(100); 

  const addTask = () => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: prevTasks.length + 1, task: '', points: '', completed: false }
    ]);
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    setCoins(prevCoins => prevCoins + parseInt(tasks.find(task => task.id === id).points));
  };

  return (
    <View style={styles.container}>

<View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -30, left: -30, width: 120, height: 120}]} />
        <View style={[styles.circle, { top: 270, right: -20}]} />
        <View style={[styles.circle, { bottom: 20, right: -50, width: 140, height: 140 }]} />
        <View style={[styles.circle, { bottom: -30, left: -70, width: 300, height: 300, borderRadius: 300,  }]} />
      </View>

      <Text style={styles.tasksLabel}>Tasks</Text>
      <View style={styles.coinsContainer}>
        <Text style={styles.coinsText}>Coins: </Text>
        <Text style={styles.coinsValue}>{coins}</Text>
      </View>
      <View style={styles.textboxContainer}>
        {tasks.map(task => (
          <View key={task.id} style={styles.row}>
            <TextInput
              style={styles.taskInput}
              placeholder="Task"
              value={task.task}
              onChangeText={text => {
                const updatedTasks = tasks.map(t => {
                  if (t.id === task.id) {
                    return { ...t, task: text };
                  }
                  return t;
                });
                setTasks(updatedTasks);
              }}
            />
            <TextInput
              style={styles.pointsInput}
              keyboardType="numeric"
              placeholder="Points"
              value={task.points}
              onChangeText={text => {
                const updatedTasks = tasks.map(t => {
                  if (t.id === task.id) {
                    return { ...t, points: text };
                  }
                  return t;
                });
                setTasks(updatedTasks);
              }}
            />
            {!task.completed && (
              <TouchableOpacity onPress={() => completeTask(task.id)}>
                <Text style={styles.completeButton}>Complete</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => deleteTask(task.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
   </View> ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>); };
export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 50,
    position: 'relative',
  },

  tasksLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },

  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  coinsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  coinsValue: {
    fontSize: 16,
    color: 'white',
  },

  textboxContainer: {
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  taskInput: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },

  pointsInput: {
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },

  completeButton: {
    color: 'green',
    marginLeft: 10,
  },

  deleteButton: {
    color: 'black',
    marginLeft: 10,
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    position: 'absolute',
  },
});
