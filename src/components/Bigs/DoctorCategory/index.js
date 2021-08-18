import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IlCatDokUmum,
  IlCatDokAnak,
  IlCatDocGigi,
  IlCatDocKulit,
  IlCatDocMata,
} from '../../../assets';
import { Colors, Font } from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Dokter Mata') {
      return <IlCatDocMata style={styles.ilustration} />;
    }
    if (category === 'Dokter Kulit') {
      return <IlCatDocKulit style={styles.ilustration} />;
    }
    if (category === 'Dokter Gigi') {
      return <IlCatDocGigi style={styles.ilustration} />;
    }
    if (category === 'Dokter Anak') {
      return <IlCatDokAnak style={styles.ilustration} />;
    }
    return <IlCatDokUmum style={styles.ilustration} />;
  };
  return (
    <TouchableOpacity style={styles.categoryDoctor} onPress={onPress}>
        <Icon />
        <Text style={styles.doctor}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  categoryDoctor: {
    flexDirection: 'column',
    width: 110,
    height: 140,
    marginRight: 10,
    backgroundColor : Colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  ilustration: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontFamily: Font.primary[400],
    color: Colors.text.primary,
  },
  doctor: {
    fontSize: 14,
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
  },
});
