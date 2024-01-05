import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, ICONS, MARGIN} from '../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const AddNewGoal = props => {
  const {showAddModal} = props;
  return (
    <Pressable style={styles.newAddGoaLStyle} onPress={showAddModal}>
     <Text style={styles.addNewText}>Add New Goal</Text>
    </Pressable>
  );
};

export default AddNewGoal;

const styles = StyleSheet.create({
  newAddGoaLStyle: {
    width: '100%',
    height: RFValue(50),
    backgroundColor: COLORS.AddBtn,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: MARGIN.lgMargin,
  },
  addNewText: {
    fontSize: FONTS.h5,
    color: COLORS.White,
  },
});
