import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  View,
  Button,
  Text,
  StyleSheet,
} from "react-native";

import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/actions/places";

const NewPlaceScreen = (props) => {
  const [titleValue, settitleValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    settitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          // value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        ></Button>
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
