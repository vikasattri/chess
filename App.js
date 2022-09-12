import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const TileList = index => {
    return (
      <View>
        {[...Array(8)].map((_, i) => (
          <View key={`row_${i}`}>
            <View
              style={[
                styles.tile,
                {
                  backgroundColor:
                    index.index % 2 === 0
                      ? i % 2 === 0
                        ? 'white'
                        : 'black'
                      : i % 2 !== 0
                      ? 'white'
                      : 'black',
                },
              ]}
            />
          </View>
        ))}
      </View>
    );
  };

  const Numbers = () => (
    <View style={styles.numbersContainer}>
      {[...Array(8)].map((_, i) => (
        <View key={`row_${i}`} style={styles.numberingItem}>
          <Text style={styles.text}>{i + 1}</Text>
        </View>
      ))}
    </View>
  );

  const Alphabets = () => (
    <View style={styles.alphabetsContainer}>
      {[...Array(8)].map((_, i) => {
        return (
          <View style={styles.alphabetsItem}>
            <Text style={styles.text}>{String.fromCharCode(65 + i)}</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.heading}>Chess Game</Text>
        <View style={styles.card}>
          <Alphabets />
          <View style={styles.horizontalcard}>
            <Numbers />
            <View style={styles.innerCard}>
              <View style={styles.tileList}>
                {[...Array(8)].map((_, i) => (
                  <TileList index={i} />
                ))}
              </View>
            </View>
            <Numbers />
          </View>
          <Alphabets />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
  },
  card: {
    borderWidth: 2,
    marginTop: 10,
  },
  horizontalcard: {flexDirection: 'row'},
  innerCard: {
    borderWidth: 1,
    width: 322,
    height: 322,
  },
  tile: {
    width: 40,
    height: 40,
  },
  tileList: {
    flexDirection: 'row',
  },
  numbersContainer: {
    width: 20,
    flexDirection: 'column-reverse',
  },
  numberingItem: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  alphabetsContainer: {
    height: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  alphabetsItem: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
});

export default App;
