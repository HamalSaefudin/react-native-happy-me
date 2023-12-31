import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export const addOne = (input: number) => input + 1

export const Counter: React.FC<{ label: string }> = ({ label }) => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>
        You pressed {count} {label} times
      </Text>
      <Button onPress={() => setCount(addOne(count))} title='Press Me' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})
