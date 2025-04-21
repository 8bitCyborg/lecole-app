import React from 'react';
import { StyleSheet, View, Text, Dimensions, ViewStyle, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../utils/colors';
import { Icon } from '@rneui/themed';

interface LeModalProps {
  isVisible: boolean;
  hideModal: () => void;
  childrenContainerStyle?: ViewStyle;
  modalTitle?: string;
  children: React.ReactNode;
};

const LeModal = ({
  isVisible,
  hideModal,
  childrenContainerStyle,
  modalTitle,
  children
}: LeModalProps ) => {
  return(
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationInTiming={500}
        animationOut="slideOutDown"
        animationOutTiming={500}
        // avoidKeyboard={true}
        swipeDirection='down'
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        onSwipeComplete={hideModal}
        hideModalContentWhileAnimating={true}
        hasBackdrop={false}
        scrollOffset={Dimensions.get('screen').height * 0.2}
      >
        <View style={[styles.childrenContainer, childrenContainerStyle]}>
          <View style={styles.modalHeader}>
            <Text>{modalTitle}</Text>
            <TouchableOpacity onPress={hideModal}>
              <Icon name="close" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />

          {children}
        </View>
      </Modal>
  );
};

export default LeModal;

const styles = StyleSheet.create({
  childrenContainer: {
    minHeight: Dimensions.get('screen').height * 0.75,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: -20,
    width: Dimensions.get('screen').width,
    borderWidth: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 10,
    width: Dimensions.get('screen').width * 0.1,
  },
  // closeBtn: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  // }
});