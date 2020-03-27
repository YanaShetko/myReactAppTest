
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  tinyLogo: {
   width: windowWidth,
   height: windowHeight,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('/Users/mac/myreact/my-first-react-app/src/mainpic.jpg')}
      />
    </View>
  );
}

export default DisplayAnImage;
