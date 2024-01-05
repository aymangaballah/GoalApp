import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {AddGoal, AddNewGoal, GoalList} from '../component';
import {COLORS, PADDINGS} from '../constants/Constants';

const AddGoalScreen = () => {
  const [goals, setGoals] = useState([]);
  const [isVisableAddGoal, setisVisableAddGoal] = useState(false);

  const addNewGoal = newgoal => {
    setGoals(currentGoals => [
      ...currentGoals,
      {text: newgoal, key: Math.random().toString()},
    ]);
  };

  const onDelete = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.key !== id));
  };

  const showAddModal = () => {
    setisVisableAddGoal(true);
  };
  const hideAddModal = () => {
    setisVisableAddGoal(false);
  };
  return (
    <>
    <StatusBar backgroundColor={COLORS.BackgroundColor}/>
      <View style={styles.Container}>
        <AddNewGoal showAddModal={showAddModal} />
        <AddGoal
          addNewGoal={addNewGoal}
          isVisableAddGoal={isVisableAddGoal}
          onCancel={hideAddModal}
        />
        <GoalList goals={goals} onDelete={onDelete} />
      </View>
      {/* <AddNewGoal/> */}
    </>
  );
};

export default AddGoalScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: PADDINGS.lgPadding,
    paddingHorizontal: PADDINGS.mdPadding,
    backgroundColor: COLORS.BackgroundColor,
  },
});
