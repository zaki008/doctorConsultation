import React from 'react';
import { StyleSheet, View } from 'react-native';

const Gap = ({width, height}) => {
    return (
        <View style={styles.gap(width, height)} />
    );
};

export default Gap;

const styles = StyleSheet.create({
  gap: (width, height) => ({
    width: width,
    height: height,
  }),
});
