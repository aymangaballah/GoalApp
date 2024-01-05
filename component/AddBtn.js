import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS} from '../constants/Constants';

const AddBtn = props => {
  const {onPress, text, backgroundColor} = props;
  return (
    <Pressable
      style={[styles.addGoalBtn, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.addGoalText}>{text}</Text>
    </Pressable>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  addGoalBtn: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.smRadius,
  },
  addGoalText: {
    fontSize: FONTS.h5,
    fontWeight: 'bold',
    color: COLORS.White,
  },
});
