import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const TasksScreen = () => {
  const tasks = [
    { task: 'Take out trash', points: '5' },
    { task: 'Wash clothes', points: '10' },
    { task: 'Time to wax the beard', points: '700' }, ];
  return (
    <View style={styles.container}>
      <View style={styles.textboxContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.row}>
            <TextInput style={styles.input} placeholder="Task" value={task.task} />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Points" value={task.points} />
          </View>
        ))}
      </View>
    </View>
  );
};
export default TasksScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 50,
  },
  textboxContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
  },
});
