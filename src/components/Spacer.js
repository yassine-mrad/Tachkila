import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
  return (
    <View>
      <Text style={styles.spacer}>{children}</Text>
     </View>
  );
}
const styles = StyleSheet.create({
    spacer:{
        margin:5
    }
})
export default Spacer;
