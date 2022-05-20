import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import SavedCard from '../../Componants/ProfileScreenComponents/SavedCard';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import {
  UserContext,
  SavedArticleContext,
  SavedPostContext,
  SavedCourseContext,
  SavedMentorContext,
} from '../../App';

const SavedScreen = props => {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);
  const {savedarticlestate, savedarticledispatch} =
    useContext(SavedArticleContext);
  const {savedpoststate, savedpostdispatch} = useContext(SavedPostContext);
  const {savedcoursestate, savedcoursedispatch} =
    useContext(SavedCourseContext);
  const {savedmentorstate, savedmentordispatch} =
    useContext(SavedMentorContext);

  return (
    state && (
      <ScrollView style={styles.screen}>
        <View
          style={{
            marginStart: '5%',
            alignItems: 'center',
            paddingBottom: '5%',
            flexDirection: 'row',
          }}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.text}>Saved</Text>
        </View>
        <SavedCard
          Title="Your Favourite Mentor"
          SavedList={savedmentorstate}
          name="Mentor"
        />
        <SavedCard Title="Saved Posts" SavedList={savedpoststate} name="Post" />
        <SavedCard
          Title="Saved courses"
          SavedList={savedcoursestate}
          name="Course"
        />
        <SavedCard
          Title="Saved Articles"
          SavedList={savedarticlestate}
          name="Article"
        />
      </ScrollView>
    )
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    marginStart: '5%',
  },
});
export default SavedScreen;
