import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import AppColors from '../../Constaint/AppColors';

const CreatePostButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={{...styles.button, ...props.style}}>
      <Icon name="plus" size={42} color={AppColors.BtnClr} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    paddingHorizontal: '3.5%',
    paddingVertical: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.CardColor,
    borderRadius: 33,
  },
});
export default CreatePostButton;