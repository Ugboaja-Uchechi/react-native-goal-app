import { StyleSheet, TextInput, View, Button, Modal } from "react-native"
import { useState } from 'react';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  };
  
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        {/* Using a parentheses for goalInputHandler would fire it automatically */}
        <TextInput 
          placeholder='Your course goals'
          style={styles.textInput} 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} />
          </View>
          
        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});

export default GoalInput;