import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { Icon } from '@rneui/themed';

interface LeActionBtn {
  onPress: () => void;
  icon_name: string;
  icon_type?: string;
}

const LeActionBtn = ({ onPress, icon_name, icon_type = 'material-community' }: LeActionBtn ) => {
  return(
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <Icon name={icon_name} type={icon_type} color='white' style={{backgroundColor: "black"}} />
    </TouchableOpacity>
  );
};

export default LeActionBtn;

const styles = StyleSheet.create({
  actionBtn: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.80,
    bottom: Dimensions.get('screen').height * 0.15,
    right: 20,
    height: 50,
    width: 50,
    borderWidth: 10,
    borderRadius: 50,
  },
})