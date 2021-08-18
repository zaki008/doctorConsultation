import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Font } from '../../../utils';

const ProfileItem = ({label, value, valueOne, valueTwo, type}) => {

  if (type === 'time'){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.values}>Hari Kerja : {valueOne}</Text>
        <Text style={styles.values}>Hari Libur : {valueTwo}</Text>
      </View>
    );
  }
  return (
      <View style={styles.container}>
          <Text style={styles.label} >{label}</Text>
          <Text style={styles.values}>{value}</Text>
      </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.border.primary,
    borderRadius: 20,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
  },
  values: {
    fontSize: 14,
    fontFamily: Font.primary[400],
    color: Colors.text.primary,
    marginTop: 2,
  },
});
