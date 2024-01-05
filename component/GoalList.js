import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';

const GoalList = props => {
  const {goals, onDelete} = props;
  return (
    <FlatList
      data={goals}
      renderItem={itemData => {
        if (itemData.item.text !== '') {
          return (
            <>
              <View style={styles.itemWrapperStyle}>
                <Pressable
                  android_ripple={{
                    color: COLORS.rippleGoalsColor,
                    borderless: true,
                  }}
                  onLongPress={onDelete.bind(this, itemData.item.key)}
                  style={styles.itemBtn}>
                  <Text style={styles.itemTextStyle}>{itemData.item.text}</Text>
                </Pressable>
              </View>
            </>
          );
        }
      }}
      keyExtractor={item => {
        return item.key;
      }}
    />
  );
};

export default GoalList;

const styles = StyleSheet.create({
  itemWrapperStyle: {
    minHeight: RFValue(50),
    width: '100%',
    backgroundColor: COLORS.GoalsColor,
    borderRadius: RADIUS.smRadius,
    marginBottom: MARGIN.smMargin,
  },
  itemBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDINGS.smPadding,
  },
  itemTextStyle: {
    fontSize: FONTS.h5,
    color: COLORS.White,
  },
});
