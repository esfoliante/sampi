import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home</Text>
      <Button
        title="Go to LeaderBoard"
        onPress={() => navigation.navigate('LeaderBoard')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

