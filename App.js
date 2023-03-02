import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} 
              />
            )
          }}
          
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
