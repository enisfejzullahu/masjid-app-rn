import React from "react";
import { View, Text, Switch, TextInput } from "react-native";

const PrayerNotificationSetting = ({ prayer, enabled, minutes, onToggle, onMinutesChange }) => {
  return (
    <View>
      <Text>{prayer}</Text>
      <Switch value={enabled} onValueChange={onToggle} />
      {enabled && (
        <TextInput
          placeholder="Minutes before"
          keyboardType="numeric"
          value={minutes.toString()}
          onChangeText={onMinutesChange}
        />
      )}
    </View>
  );
};

export default PrayerNotificationSetting;
