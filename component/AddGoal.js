import {
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {AddBtn} from '.';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {GoalImage} from '../constants/Images';
const AddGoal = props => {
  const {addNewGoal, isVisableAddGoal, onCancel} = props;
  const [textInput, settextInput] = useState('');
  const onChangeText = enteredText => {
    settextInput(enteredText);
  };

  const onPress = () => {
    addNewGoal(textInput);
    settextInput(previous => (previous = ''));
    onCancel();
  };
  return (
    <Modal
      visible={isVisableAddGoal}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <Image source={GoalImage} style={styles.imageStyle} />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Add Your Goal !!"
            value={textInput}
            onChangeText={onChangeText}
          />
          <View style={styles.btnsContainer}>
            <AddBtn
              onPress={onCancel}
              text="Cancel"
              backgroundColor={COLORS.CancelBtn}
            />
            <AddBtn
              onPress={onPress}
              text="Add Goal"
              backgroundColor={COLORS.AddBtn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddGoal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.BackgroundColor,
  },
  textInputContainer: {
    height: RFValue(120),
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.smPadding,
  },
  textInputStyle: {
    width: '100%',
    backgroundColor: COLORS.TextInput,
    fontSize: FONTS.h5,
    paddingLeft: PADDINGS.smPadding,
    borderRadius: RADIUS.smRadius,
    marginBottom: MARGIN.lgMargin,
    color: COLORS.ColorOFTextinput,
  },
  btnsContainer: {
    width: '90%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageStyle: {
    width: RFValue(170),
    height: RFValue(170),
    marginBottom: MARGIN.lgMargin,
  },
});
