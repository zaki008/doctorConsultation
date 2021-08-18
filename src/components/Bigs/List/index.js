import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Colors, Font } from '../../../utils';
import {
  IcNext,
  IconEditProfile,
  IconLanguage,
  IconRate,
  IconHelp,
} from '../../../assets';
import Swipeable from 'react-native-swipeable';

const List = ({
  profile,
  name,
  desc,
  type,
  onPress,
  icon,
  kind,
  onDelete,
  onOpen,
  onClose,
}) => {
  const Icon = () => {
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };

  if (kind === 'messages') {
    return (
      <Swipeable
        style={styles.wrapper}
        rightButtons={[
          <View style={styles.contentSwipe}>
            <TouchableOpacity
              style={[styles.rightSwipeItem]}
              onPress={onDelete}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>,
        ]}
        onRightButtonsOpenRelease={onOpen}
        onRightButtonsCloseRelease={onClose}
        >
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {icon ? <Icon /> : <Image source={profile} style={styles.photos} />}
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
          </View>
          {type === 'next' && <IcNext />}
        </TouchableOpacity>
      </Swipeable>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.photos} />}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IcNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 4,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.border.primary,
    borderRadius: 20,
  },
  photos: {
    width: 48,
    height: 48,
    borderRadius: 46 / 2,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: Font.primary[500],
    color: Colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    marginTop: -2,
    fontSize: 12,
    fontFamily: Font.primary[300],
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
  contentSwipe: {
    padding: 20,
    backgroundColor: Colors.error,
    maxWidth: '80%',
    borderRadius: 10,
    marginLeft: 4,
  },
  delete: {
    color: Colors.text.white,
    fontFamily: Font.primary[400],
    fontSize: 14,
  },
});
